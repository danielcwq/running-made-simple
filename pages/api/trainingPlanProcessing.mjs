import xlsx from "xlsx";
import path from "path";
import express from "express";
const MyRouter = express.Router();

const readExcelSheetForWeek = async (weekNumber) => {
  const filePath = path.resolve("./public", "JustIPPT.xlsx");
  const workbook = xlsx.readFile(filePath);
  const sheetName = `Week${weekNumber}`;
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) return null;

  return xlsx.utils.sheet_to_json(worksheet);
};
// currently this isn't going to be used since i'm testing in production! so don't worry if this breaks in local dev
// Dynamic route for specific weeks
MyRouter.get("/week/:weekNumber", async (req, res) => {
  try {
    const weekNumber = req.params.weekNumber;

    if (!weekNumber || isNaN(weekNumber) || weekNumber < 8 || weekNumber > 16) {
      return res.status(400).send("Invalid week number");
    }

    const trainingPlanData = await readExcelSheetForWeek(weekNumber);

    if (!trainingPlanData) {
      return res
        .status(404)
        .send(`Training plan data not found for week ${weekNumber}`);
    }

    res.json(trainingPlanData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default MyRouter;
