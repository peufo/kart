import docs from "@googleapis/docs";
import { google } from "googleapis";
import path from "node:path";
import { env } from "$env/dynamic/private";

const auth = new docs.auth.GoogleAuth({
  keyFilename: path.resolve(env.GOOGLE_KEY_FILENAME),
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

export async function getFiles() {
  const res = await drive.files.list({
    q: `'${env.GOOGLE_FOLDER_ID}' in parents and trashed = false`,
    fields:
      "files(exportLinks, name, mimeType, modifiedTime, size, webContentLink, webViewLink)",
    //fields: "files(*)",
  });

  // @ts-ignore
  const files = res.data.files as GoogleFile[];
  return files || [];
}
