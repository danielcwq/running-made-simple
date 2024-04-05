import * as XLSX from "xlsx";
import { useCalculator } from "@/hooks/useCalculator";

const workoutDescriptions = {
  "Z1.20": "20min at Z2",
  "Z1.30": "30min at Z2",
  "Z2.2": "5 x (2min at Z4, 2min recovery)",
  "Z2.3": "3 x (3min at Z4, 3min recovery)",
  "Z2.4": "3 x (4min at Z4, 2min recovery)",
  "Z2.5": "2 x (5min at Z4, 5min recovery)",
  "Z2.6": "2 x (6min at Z4, 3min recovery)",
  "2.4/200": "8 x (200m in {Z3 200m}, {Z3 200m} recovery)",
  "2.4/300": "5 x (300m in {Z3 300m}, {Z3 300m} recovery)",
  "2.4/400": "4 x (400m in {Z3 400m}, {Z3 400m} recovery)",
  "2.4/500": "3 x (500m in {Z3 500m}, {Z3 500m} recovery)",
  "2.4/600": "3 x (600m in {Z3 600m}, {Z3 600m} recovery)",
  "2.4/800": "2 x (800m in {Z3 800m}, {Z3 800m} recovery)",
  "2.4/1000": "2 x (1000m in {Z3 1000m}, {Z3 1000m} recovery)",
  Nil: "Rest",
  "T/200/5": "2 x (200m in {Z3 200m}, {Z3 400m} recovery)",
  "TT 1.2km": "Run 1.2km (3 laps) all out",
};
const calculateWeeksUntilRace = (raceDate, startDate) => {
  const start = new Date(startDate);
  const race = new Date(raceDate);
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const weeks = (race - start) / millisecondsPerWeek;
  return Math.floor(weeks);
};
const fetchAndProcessXLSX = async (weeksUntilRace) => {
  // Fetch the .xlsx file from the public directory
  const response = await fetch(`/JustIPPT.xlsx`);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);
  const workbook = XLSX.read(data, { type: "array" });

  // Get the sheet for the specific week
  const sheetName = `Week${weeksUntilRace}`;
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet for week ${weeksUntilRace} not found`);
  }

  // Convert sheet to JSON
  const json = XLSX.utils.sheet_to_json(worksheet);
  return json;
};
function calculatePaces(finalRaceTimeInSeconds) {
  function roundToNearestFive(seconds) {
    // Change rounding to nearest 30 seconds
    return 10 * Math.round(seconds / 10);
  }
  return {
    "Z3 RaceTime": finalRaceTimeInSeconds,
    "Z3 100m": (finalRaceTimeInSeconds / 24).toFixed(0) + "s",
    "Z3 200m":
      Math.floor(finalRaceTimeInSeconds / 12 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 12) % 60)) +
      "s",

    "Z3 300m":
      Math.floor(finalRaceTimeInSeconds / 8 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 8) % 60)) +
      "s",

    "Z3 400m":
      Math.floor(finalRaceTimeInSeconds / 6 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 6) % 60)) +
      "s",

    "Z3 500m":
      Math.floor(finalRaceTimeInSeconds / 4.8 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 4.8) % 60)) +
      "s",

    "Z3 600m":
      Math.floor(finalRaceTimeInSeconds / 4 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 4) % 60)) +
      "s",

    "Z3 800m":
      Math.floor(finalRaceTimeInSeconds / 3 / 60) +
      "m " +
      roundToNearestFive(Math.floor((finalRaceTimeInSeconds / 3) % 60)) +
      "s",
  };
}
const replaceWorkoutPlaceholders = (workoutDescription, z3Paces, hrZones) => {
  // Replace Z3 pace placeholders with values from the paces object
  const pacePlaceholderPattern = /\{Z3 (\d+m)\}/g; // Matches {Z3 200m}, {Z3 400m}, etc.
  workoutDescription = workoutDescription.replace(
    pacePlaceholderPattern,
    (match, p1) => {
      // p1 would be "200m", "400m", etc. Here we assume the z3Paces object has keys like "Z3 200m"
      const paceKey = `Z3 ${p1}`;
      return z3Paces[paceKey] || match; // Replace with calculated pace, or leave unchanged if not found
    }
  );
  return workoutDescription;
};
export const calculateTrainingPlan = async (
  birthdate,
  Vo2Max,
  timeMinutes,
  timeSeconds,
  raceDay,
  trainingStartDate,
  validateAndCalculate,
  results
) => {
  // Use the validateAndCalculate function to validate inputs
  if (!validateAndCalculate()) {
    throw new Error("Input validation failed");
  }
  const weeksUntilRace = calculateWeeksUntilRace(raceDay, trainingStartDate);
  const workoutSchedule = await fetchAndProcessXLSX(weeksUntilRace);

  const paces = calculatePaces(results.estimatedRaceTimeInSeconds);
  console.log(paces);
  console.log(results.estimatedRaceTimeInSeconds);
  // Replace placeholders in workoutDescriptions with actual paces
  const trainingPlan = workoutSchedule.map((workout) => {
    // Assuming workout has properties like 'Phase', 'Weeks to 2.4km', 'Session 1', 'Session 2', 'Session 3'
    console.log("Workout details:", workout);
    const workoutDescription = {
      Phase: workout["Phase"],
      "Weeks to 2.4km": workout["Weeks to 2.4km"],
      "Session 1": replaceWorkoutPlaceholders(
        workoutDescriptions[workout["Session 1"]] || "Description not found",
        paces
        //hrZones
      ),
      "Session 2": replaceWorkoutPlaceholders(
        workoutDescriptions[workout["Session 2"]] || "Description not found",
        paces
        //hrZones
      ),
    };
    console.log(workoutDescription);
    return workoutDescription;
  });
  return trainingPlan;
};
