// pages/api/expense.ts
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, category, description, amount, currency } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[date, category, description, amount, currency]],
      },
    });

    res.status(200).json({ message: "Expense entry saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
