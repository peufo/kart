import docs from "@googleapis/docs";
import { google } from "googleapis";
import path from "node:path";
import { GOOGLE_KEY_FILENAME, GOOGLE_SHEET_ID } from "$env/static/private";

const googleAuth = new docs.auth.GoogleAuth({
  keyFilename: path.resolve(GOOGLE_KEY_FILENAME),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth: googleAuth,
});

type Team = {
  timestamp: string;
  name: string;
  user1: string;
  user2: string;
  time: string;
};

export async function getTeams() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: "teams",
  });
  const values = res.data.values?.slice(1) ?? ([] as string[][]);
  const teams: Team[] = values
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
  return teams;
}
