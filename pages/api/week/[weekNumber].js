// pages/api/week/[weekNumber].js
import xlsx from "xlsx";
import path from "path";

export default async function handler(req, res) {
  const { weekNumber } = req.query;

  // Validation of weekNumber can be more elaborate based on your requirements
  if (!weekNumber || isNaN(weekNumber) || weekNumber < 8 || weekNumber > 16) {
    res.status(400).json({ error: "Invalid week number" });
    return;
  }

  try {
    const filePath = path.resolve("./public", "Just2.4km.xlsx"); // Adjust the path as necessary
    const workbook = xlsx.readFile(filePath);
    const sheetName = `Week${weekNumber}`;
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) {
      res
        .status(404)
        .json({ error: `Training plan data not found for week ${weekNumber}` });
      return;
    }
    const trainingPlanData = xlsx.utils.sheet_to_json(worksheet);
    res.status(200).json(trainingPlanData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
