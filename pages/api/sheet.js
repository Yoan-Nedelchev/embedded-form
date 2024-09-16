// import { google } from "googleapis";
// import keys from "../../key";

// export default function handler(req, res) {
//   try {
//     const client = new google.auth.JWT(
//       keys.client_email,
//       null,
//       keys.private_key,
//       ["https://www.googleapis.com/auth/spreadsheets"]
//     );

//     client.authorize(async function (err, tokens) {
//       if (err) {
//         return res.status(400).send(JSON.stringify({ error: true }));
//       }

//       const gsapi = google.sheets({ version: "v4", auth: client });

//       //CUSTOMIZATION FROM HERE
//       const opt = {
//         spreadsheetId: "1aNjvInpK_oJRT1iYgdz1AmL8NlLH31uwtUhfxxFuW4w",
//         range: "Запазени часове!A2:F6",
//       };

//       let data = await gsapi.spreadsheets.values.get(opt);
//       console.log(data);
//       return res
//         .status(200)
//         .send(JSON.stringify({ error: false, data: data.data.values }));
//     });
//   } catch (e) {
//     return res
//       .status(400)
//       .send(JSON.stringify({ error: true, message: e.message }));
//   }
// }

export default async function handler(req, res) {
  const secretUrlPart = process.env.FILTER_BY_DATE_URL;

  try {
    // Call your Google Apps Script Web App URL
    const response = await fetch(secretUrlPart, { redirect: "follow" });
    const data = await response.json();
    console.log(data);
    res // Send the data back to the client
      .status(200)
      .json({ data });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve data from Google Apps Script" });
  }
}
