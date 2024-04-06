import xlsx from "xlsx";
import path from "path";
import { useState } from "react";
import * as XLSX from "xlsx";

// to retain this
const workoutDescriptions = {
  "Z1.20": "20min at Z1",
  "Z1.30": "30min at Z1",
  "Z2.2": "5 x (2min at Z4, 2min Z3)",
  "Z2.3": "3 x (3min at Z4, 3min Z3)",
  "Z2.4": "3 x (4min at Z4, 2min Z3)",
  "Z2.5": "2 x (5min at Z4, 5min Z3)",
  "Z2.6": "2 x (6min at Z4, 3min Z3)",
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
// to retain this too
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

function calculateRaceTime(v) {
  var d = 2400; // Fixed distance for prediction
  var t = d * 0.004; // Initial time estimate
  var n = 0;
  var c, i, e, dc, di, dt;

  if (isNaN(v)) {
    console.error("VO2Max value must be numeric.");
    return null;
  }

  do {
    c = -4.6 + (0.182258 * d) / t + (0.000104 * d * d) / t / t;
    i =
      0.8 +
      0.1894393 * Math.exp(-0.012778 * t) +
      0.2989558 * Math.exp(-0.1932605 * t);
    e = Math.abs(c - i * v);
    dc = (-0.182258 * d) / t / t - (2 * 0.000104 * d * d) / t / t / t;
    di =
      -0.012778 * 0.1894393 * Math.exp(-0.012778 * t) -
      0.1932605 * 0.2989558 * Math.exp(-0.1932605 * t);
    dt = (c - i * v) / (dc - di * v);
    t -= dt;
    n++;
  } while (n < 10 && e > 0.1);

  var RaceTimeInSecondsBeforeTemp = Math.round(t * 60); // Round to nearest second
  console.log(RaceTimeInSecondsBeforeTemp);
  let impact;
  impact = (38 - 15) * (0.1666667 * RaceTimeInSecondsBeforeTemp); // where 38 is the feels like temp
  let paceDiff;
  paceDiff = impact / (2.4 * 60); //perKM impact
  let totalTimeIncrement;
  totalTimeIncrement = paceDiff * 2.4;
  var raceTimeInSeconds = RaceTimeInSecondsBeforeTemp + totalTimeIncrement;
  console.log(raceTimeInSeconds);
  return raceTimeInSeconds;
}
const calculateZ3Pace = (input, isVo2Max = false) => {
  function roundToNearestFive(seconds) {
    // round down to nearest 30s to change this
    return 5 * Math.round(seconds / 5);
  }
  let finalRaceTimeInSeconds;
  let timeTrialSeconds;
  // Validate input is a number and greater than zero.
  if (typeof input !== "number" || isNaN(input) || input <= 0) {
    throw new Error("Input must be a positive number.");
  }

  if (isVo2Max) {
    // Calculate race time based on VO2 Max input.
    finalRaceTimeInSeconds = calculateRaceTime(input);
  } else if (input > 100) {
    // Calculate race time based on time trial seconds.
    finalRaceTimeInSeconds = input * Math.pow(2, 1.06);
  }

  // Log the calculated race time.
  console.log(`this is ${finalRaceTimeInSeconds} after calculation`);

  // Ensure finalRaceTimeInSeconds is a number before proceeding.
  if (isNaN(finalRaceTimeInSeconds)) {
    throw new Error("Final race time calculation failed, resulting in NaN.");
  }

  const paces = {
    // maybe this should be placed inside the calculateTrainingPlanData instead of here?!
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

  return paces;
};

const calculateHeartRateZones = (birthdate) => {
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthdate);
  const maxHeartRate = 211 - 0.64 * age;
  const hrZone2Start = 0.61 * maxHeartRate;
  const hrZone2End = 0.7 * maxHeartRate;
  const hrZ3End = 0.8 * maxHeartRate;
  const thresholdZoneStart = 0.81 * maxHeartRate;
  const thresholdZoneEnd = 0.9 * maxHeartRate;

  const Hzones = {
    //"Maximum Heart Rate": `${Math.round(maxHeartRate)}bpm`, <- find a way to input this too
    "Z1 (51-60%)": `<${Math.round(hrZone2Start)}bpm`,
    "Z2 (61-70%)": `from ${Math.round(hrZone2Start)}bpm - ${Math.round(
      hrZone2End
    )}bpm`,
    "Z3 (71-80%)": `from ${Math.round(hrZone2End)}bpm - ${Math.round(
      hrZ3End
    )}bpm`,
    "Z4 (81-90%)": `from ${Math.round(thresholdZoneStart)}bpm - ${Math.round(
      thresholdZoneEnd
    )}bpm`,
    "Z5 (91-100%)": `from ${Math.round(thresholdZoneEnd)}bpm - ${Math.round(
      maxHeartRate
    )}bpm`,
  };
  return Hzones;
};

// Placeholder for the logic to calculate the weeks until the race
const calculateWeeksUntilRace = (raceDate) => {
  const today = new Date();
  const race = new Date(raceDate);
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const weeks = (race - today) / millisecondsPerWeek;
  return Math.floor(weeks);
};

// Workout Replacement Function, to retain this
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

  // Replace Z1 and Z2 heart rate zone placeholders
  //workoutDescription = workoutDescription.replace("{Z1}", hrZones.Z1);
  //workoutDescription = workoutDescription.replace("{Z2}", hrZones.Z2);

  return workoutDescription;
};

export const calculateTrainingPlanData = (birthdate, input, isVo2Max) => {
  let raceTimeInSeconds;
  if (isVo2Max) {
    raceTimeInSeconds = calculateRaceTime(input);
  } else {
    raceTimeInSeconds = input * Math.pow(2, 1.06); // Assuming input is the totalSeconds for the time trial
  }
  // removed timeTrialSeconds
  if (input > 0) {
    const z3Paces = calculateZ3Pace(raceTimeInSeconds); // Note the change in the parameter
    const hrZones = calculateHeartRateZones(birthdate);
    return {
      heartRateZones: hrZones,
      paces: z3Paces,
    };
  }
};

export const calculateTrainingPlan = async (
  birthdate,
  raceDate,
  z3Paces,
  hrZones
) => {
  const weeksUntilRace = calculateWeeksUntilRace(raceDate);
  try {
    const schedule = await fetchAndProcessXLSX(weeksUntilRace);

    if (!Array.isArray(schedule)) {
      console.error("Expected an array for schedule, received:", schedule);
      return [];
    }

    // Map through the schedule to replace placeholders and return the training plan
    const trainingPlan = schedule.map((workout) => {
      // Assuming workout has properties like 'Phase', 'Weeks to 2.4km', 'Session 1', 'Session 2', 'Session 3'
      console.log("Workout details:", workout);
      const workoutDescription = {
        Phase: workout["Phase"],
        "Weeks to 2.4km": workout["Weeks to 2.4km"],
        "Session 1": replaceWorkoutPlaceholders(
          workoutDescriptions[workout["Session 1"]] || "Description not found",
          z3Paces
          //hrZones
        ),
        "Session 2": replaceWorkoutPlaceholders(
          workoutDescriptions[workout["Session 2"]] || "Description not found",
          z3Paces
          //hrZones
        ),
      };
      console.log(workoutDescription);
      return workoutDescription;
    });

    return trainingPlan;
  } catch (error) {
    console.error("Fetching and processing the training plan failed:", error);
    return [];
  }
};
