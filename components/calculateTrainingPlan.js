const workoutDescriptions = {
  "Z1.20": "run 20min at {Z1}",
  "Z1.30": "run 30min at {Z1}",
  "Z2.2": "5 x (2min at {Z2}, 2min {Z1})",
  "Z2.3": "3 x (3min at {Z2}, 3min {Z1})",
  "Z2.4": "3 x (4min at {Z2}, 2min {Z1})",
  "Z2.5": "2 x (5min at {Z2}, 5min {Z1})",
  "Z2.6": "2 x (6min at {Z2}, 3min {Z1})",
  "2.4/200": "8 x (200m in {Z3 200m}, {Z3 200m} recovery)",
  "2.4/300": "5 x (300m in {Z3 300m}, {Z3 300m} recovery)",
  "2.4/400": "4 x (400m in {Z3 400m}, {Z3 400m} recovery)",
  "2.4/500": "3 x (500m in {Z3 500m}, {Z3 500m} recovery)",
  "2.4/600": "3 x (600m in {Z3 600m}, {Z3 600m} recovery)",
  "2.4/800": "2 x (800m in {Z3 800m}, {Z3 800m} recovery)",
  "2.4/1000": "2 x (1000m in {Z3 1000m}, {Z3 1000m} recovery)",
  Nil: "Rest",
  "T/200/5": "2 x (200m in {Z3 200m}, {Z3 400m} recovery)",
};
{
  /* 
const getTrainingPlanFromSheet = async (weeksUntilRace) => {
  const xlsxFilePath = path.resolve("./public", "Just2.4km.xlsx");
  const workbook = xlsx.readFile(xlsxFilePath);
  const sheetName = `Week${weeksUntilRace}`;

  if (!workbook.Sheets[sheetName]) {
    throw new Error("Sheet not found");
  }

  const sheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(sheet);
};
*/
}
const fetchTrainingPlanData = async (weeksUntilRace) => {
  try {
    const response = await fetch(`/api/training-plan/week/${weeksUntilRace}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const planData = await response.json();
    console.log("Plan data received:", planData); // Inspect the received data
    return planData;
  } catch (error) {
    console.error("Fetching training plan failed:", error);
  }
};

// Placeholder for the logic to calculate the pace zones
const calculateZ3Pace = (totalSeconds) => {
  // Convert the 1.2km time trial to seconds for calculation, lines 52 and 53 are not needed
  //const totalSeconds =
  //  parseInt(timeTrial.split(":")[0]) * 60 + parseInt(timeTrial.split(":")[1]);

  // Calculate the race pace using the formula from useCalculator.js
  const raceTimeInSeconds = totalSeconds * Math.pow(2, 1.06);

  // Define the Z3 paces for different distances based on the 1.2km time
  const paces = {
    "Z3 100m": (raceTimeInSeconds / 24).toFixed(0) + "s",
    "Z3 200m":
      Math.floor(raceTimeInSeconds / 12 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 12) % 60) +
      "s",
    "Z3 300m":
      Math.floor(raceTimeInSeconds / 8 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 8) % 60) +
      "s",
    "Z3 400m":
      Math.floor(raceTimeInSeconds / 6 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 6) % 60) +
      "s",
    "Z3 500m":
      Math.floor(raceTimeInSeconds / 4.8 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 4.8) % 60) +
      "s",
    "Z3 600m":
      Math.floor(raceTimeInSeconds / 4 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 4) % 60) +
      "s",
    "Z3 800m":
      Math.floor(raceTimeInSeconds / 3 / 60) +
      "m " +
      Math.floor((raceTimeInSeconds / 3) % 60) +
      "s",
    // Continue for other distances if needed
  };

  return paces;
};

// Example usage:
// const z3Paces = calculateZ3Pace('5:00'); // 5 minutes and 00 seconds for 1.2km time trial
// console.log(z3Paces['Z3 200m']); // Outputs the pace for 200m in Z3

const calculateHeartRateZones = (birthdate) => {
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthdate);
  const maxHeartRate = 211 - 0.64 * age;
  const z1UpperLimit = Math.round(0.7 * maxHeartRate);
  const z2LowerLimit = Math.round(0.7 * maxHeartRate) + 1;
  const z2UpperLimit = Math.round(0.85 * maxHeartRate);

  return {
    Z1: `below ${z1UpperLimit} bpm`,
    Z2: `${z2LowerLimit}-${z2UpperLimit} bpm`,
  };
};

// Example usage:
// const hrZones = calculateHeartRateZones('1990-01-01');
// console.log(hrZones.Z1); // Outputs the heart rate zone for Z1
// console.log(hrZones.Z2); // Outputs the heart rate zone for Z2

// Placeholder for the logic to calculate the weeks until the race
const calculateWeeksUntilRace = (raceDate) => {
  const today = new Date();
  const race = new Date(raceDate);
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const weeks = (race - today) / millisecondsPerWeek;
  return Math.floor(weeks);
};

// Schedule Mapping Function for .xlsx file
{
  /*
const mapWeeksToScheduleFromXLSX = async () => {
  const xlsxFilePath = path.resolve("./public", "your-training-plan.xlsx"); // Correct path to your .xlsx file
  const workbook = xlsx.readFile(xlsxFilePath);

  let schedule = {};

  // Assuming each sheet's name is a week number like "Week11", "Week12", etc.
  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    // Process the data to fit the structure needed
    // Example: convert each row to an object with week number as key and workout details as value
    schedule[sheetName] = data.map((row) => row.workout);
  });

  return schedule;
};
*/
}

// Workout Replacement Function
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
  workoutDescription = workoutDescription.replace("{Z1}", hrZones.Z1);
  workoutDescription = workoutDescription.replace("{Z2}", hrZones.Z2);

  return workoutDescription;
};

export const calculateTrainingPlan = async (timeTrial, birthdate, raceDate) => {
  // Existing calculations
  const weeksUntilRace = calculateWeeksUntilRace(raceDate);
  const z3Paces = calculateZ3Pace(timeTrial);
  const hrZones = calculateHeartRateZones(birthdate);

  let schedule;

  // Fetch the training plan using the fetchTrainingPlanData function
  try {
    schedule = await fetchTrainingPlanData(weeksUntilRace);
    console.log("Schedule received:", schedule); // This will output the schedule to the console
  } catch (error) {
    console.error("Fetching training plan failed:", error);
    return [];
  }

  // Check if the schedule is an array before proceeding
  if (!Array.isArray(schedule)) {
    console.error("Expected an array for schedule, received:", schedule);
    return [];
  }
  //
  //

  // Replace placeholders in the schedule with actual calculated values
  const trainingPlan = schedule.map((workout) => {
    // Assuming workout has properties like 'Phase', 'Weeks to 2.4km', 'Session 1', 'Session 2', 'Session 3'
    console.log("Workout details:", workout);
    const workoutDescription = {
      Phase: workout["Phase"],
      "Weeks to 2.4km": workout["Weeks to 2.4km"],
      "Session 1": replaceWorkoutPlaceholders(
        workoutDescriptions[workout["Session 1"]] || "Description not found",
        z3Paces,
        hrZones
      ),
      "Session 2": replaceWorkoutPlaceholders(
        workoutDescriptions[workout["Session 2"]] || "Description not found",
        z3Paces,
        hrZones
      ),
    };
    console.log(workoutDescription);
    return workoutDescription;
  });

  return trainingPlan;
};
