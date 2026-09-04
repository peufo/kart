import docs from "@googleapis/docs";
import { google } from "googleapis";
import path from "node:path";
import { env } from "$env/dynamic/private";

const auth = new docs.auth.GoogleAuth({
  keyFilename: path.resolve(env.GOOGLE_KEY_FILENAME || ""),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.readonly",
  ],
});

// @ts-ignore
const sheets = google.sheets({
  version: "v4",
  auth,
});

const drive = google.drive({
  version: "v3",
  // @ts-ignore
  auth,
});

type Team = {
  timestamp: string;
  name: string;
  user1: string;
  user2: string;
  time: string;
};

export async function getChronos() {
  //return [] as Team[]; // Disable

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: env.GOOGLE_SHEET_ID,
    range: "chronos",
  });
  const values = res.data.values?.slice(1) ?? ([] as string[][]);
  const chronos: Team[] = values
    .map(([timestamp, , name, user1, user2, time = ""]) => ({
      timestamp,
      name,
      user1,
      user2,
      time,
    }))
    .toSorted((a, b) => {
      return a.time.localeCompare(b.time);
    });

  return chronos;
}

export type GoogleFile = {
  name: string;
  mimeType: string;
  modifiedTime: string;
  size: string;
  webViewLink: string;
  webContentLink?: string;
  exportLinks?: {
    "application/rtf": string;
    "application/vnd.oasis.opendocument.text": string;
    "text/html": string;
    "application/pdf": string;
    "text/x-markdown": string;
    "text/markdown": string;
    "application/epub+zip": string;
    "application/zip": string;
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": string;
    "text/plain": string;
  };
};

const DOCUMENT_MIME_TYPES = [
  "application/pdf",
  "application/vnd.google-apps.document",
];

export async function getFiles() {
  const mimeFilter = DOCUMENT_MIME_TYPES.map((t) => `mimeType = '${t}'`).join(
    " or ",
  );

  const res = await drive.files.list({
    q: `'${env.GOOGLE_FOLDER_ID}' in parents and trashed = false and (${mimeFilter})`,
    fields:
      "files(exportLinks, name, mimeType, modifiedTime, size, webContentLink, webViewLink)",
    //fields: "files(*)",
  });

  // @ts-ignore
  const files = res.data.files as GoogleFile[];
  return files || [];
}

export type GoogleImage = {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime: string;
  width?: number;
  height?: number;
};

type ImageEntry = GoogleImage & { thumbnailLink?: string };

const INDEX_TTL = 5 * 60 * 1000;
const INDEX_MIN_REFRESH = 10 * 1000;

let imageIndex: {
  entries: ImageEntry[];
  map: Map<string, ImageEntry>;
  fetchedAt: number;
} | null = null;

async function loadImageIndex() {
  const res = await drive.files.list({
    q: `'${env.GOOGLE_FOLDER_ID}' in parents and trashed = false and mimeType contains 'image/'`,
    fields:
      "files(id, name, mimeType, modifiedTime, thumbnailLink, imageMediaMetadata(width, height))",
    orderBy: "name",
    pageSize: 1000,
  });

  const entries: ImageEntry[] = (res.data.files || []).map((file) => ({
    id: file.id!,
    name: file.name!,
    mimeType: file.mimeType!,
    modifiedTime: file.modifiedTime!,
    width: file.imageMediaMetadata?.width ?? undefined,
    height: file.imageMediaMetadata?.height ?? undefined,
    thumbnailLink: file.thumbnailLink ?? undefined,
  }));

  imageIndex = {
    entries,
    map: new Map(entries.map((entry) => [entry.id, entry])),
    fetchedAt: Date.now(),
  };
  return imageIndex;
}

export async function getImages(): Promise<GoogleImage[]> {
  // Listing frais a chaque chargement: une photo ajoutee dans Drive doit
  // apparaitre au rechargement de la page.
  const { entries } = await loadImageIndex();
  return entries.map((entry) => ({
    id: entry.id,
    name: entry.name,
    mimeType: entry.mimeType,
    modifiedTime: entry.modifiedTime,
    width: entry.width,
    height: entry.height,
  }));
}

// Le garde-fou du proxy: seules les images listees dans le dossier public sont
// servies, sinon la route deviendrait un proxy ouvert vers tout ce que voit le
// compte de service. (Drive ne renvoie pas `parents` pour ces fichiers, on ne
// peut donc pas se baser dessus.)
async function getImageEntry(fileId: string) {
  let index = imageIndex;
  if (!index || Date.now() - index.fetchedAt > INDEX_TTL) {
    index = await loadImageIndex();
  }

  let entry = index.map.get(fileId);
  if (!entry && Date.now() - index.fetchedAt > INDEX_MIN_REFRESH) {
    // Peut-etre une photo ajoutee depuis le dernier listing.
    entry = (await loadImageIndex()).map.get(fileId);
  }

  return entry ?? null;
}

export async function getImageBytes(fileId: string, width?: number) {
  const entry = await getImageEntry(fileId);
  if (!entry) return null;

  if (width && entry.thumbnailLink) {
    const res = await fetch(
      entry.thumbnailLink.replace(/=[^=]*$/, `=w${width}`),
    );
    // Les liens de vignettes Drive expirent: on retombe sur l'original si besoin.
    if (res.ok) {
      return {
        body: await res.arrayBuffer(),
        mimeType: res.headers.get("content-type") || entry.mimeType,
      };
    }
  }

  const res = await drive.files.get(
    { fileId, alt: "media" },
    { responseType: "arraybuffer" },
  );
  return {
    body: res.data as ArrayBuffer,
    mimeType: entry.mimeType,
  };
}
