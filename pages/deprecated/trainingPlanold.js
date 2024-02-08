import React, { useState } from "react";
import { useEffect } from "react";
import { useCalculator } from "../../hooks/useCalculator";

const { results } = useCalculator();
const allWorkouts = {
  "1a": { description: "30min {Z1}" },
  "1b": {
    description:
      "Warm Up 10min in {Z1}, 1.2km Time Trial on track (3 laps), Cool Down 10min in {Z1}",
  },
  "2a": {
    description: `Warm Up 10min in {Z1}, (200m in ${Math.floor(
      RaceTimeInSeconds / 12 / 60
    )}m ${Math.floor(
      (RaceTimeInSeconds / 12) % 60
    )}s, 1min {Z1})x6, Cool Down 8min {Z1}`,
  },
  "3a": {
    description:
      "Warm Up 10min in {Z1}, 10min in {Z2}, Cool Down 10min in {Z1}",
  },
  "3b": {
    description: "Warm Up 10min in {Z1}, 12min in {Z2}, Cool Down 8min in {Z1}",
  },
  "3c": {
    description: "Warm Up 10min in {Z1}, 15min in {Z2}, Cool Down 5min in {Z1}",
  },
  "3d": {
    description: `Warm Up 10min in {Z1}, (400m in ${Math.floor(
      RaceTimeInSeconds / 8 / 60
    )}m ${Math.floor(
      (RaceTimeInSeconds / 8) % 60
    )}s, 2min {Z1})x3, Cool Down 8min {Z1}`,
  },
  "4a": {
    description: "Warm Up 10min in {Z1}, 5min in {Z2}, Cool Down 15min in {Z1}",
  },
  "4b": {
    description: `Warm Up 10min in {Z1}, (600m in ${Math.floor(
      RaceTimeInSeconds / 4 / 60
    )}m ${Math.floor(
      (RaceTimeInSeconds / 4) % 60
    )}s, 2min {Z1}x3), Cool Down 5min {Z1}`,
  },
  "4c": {
    description: `Warm Up 10min in {Z1}, (800m in {Math.floor(RaceTimeInSeconds / 3 / 60)}m ${Math.floor(
      (RaceTimeInSeconds / 3) % 60
    )}s, 3min {Z1}x2), Cool Down 5min {Z1}`,
  },
  "5c": {
    description: `Warm Up 10min in {Z1}, (200m in ${Math.floor(
      RaceTimeInSeconds / 12 / 60
    )}m ${Math.floor(
      (RaceTimeInSeconds / 12) % 60
    )}s, 1min {Z1})x4, Cool Down 8min {Z1}`,
  },
};
const workoutSchedule = {
  12: ["1a", "1b", "2a", "2b", "3a", "3b", "12a", "12b"], // Full 12-week plan
  4: ["1a", "1b", "4a", "4b", "5a", "5b", "12a", "12b"], // 4 weeks remaining
  // ... other specific schedules for different weeks remaining
};

const getWorkoutForRemainingWeeks = (weeksRemaining, raceTimeInSeconds) => {
  const selectedWorkouts =
    workoutSchedule[weeksRemaining] || workoutSchedule[12];
  return selectedWorkouts.map((workoutId) => {
    let description = allWorkouts[workoutId].description;

    // Replace placeholders with race time data
    description = description.replace(
      /{Z1}/g,

      "{Z1 Placeholder}"
    ); // Replace with actual logic to insert HR Zone data
    description = description.replace(/{Z2}/g, "{Z2 Placeholder}");
    // Add more replacements for other zones if needed

    return {
      ...allWorkouts[workoutId],
      description: description,
    };
  });
};

//function to map Z1 and Z2. remember to add <TrainingPlan trainingPlanData (or whatever it's called) to main component and add as prop>- refer to ChatGPT later
const replaceZonePlaceholders = (workoutDescription, hrZones) => {
  return workoutDescription
    .replace(/{Z1}/g, hrZones["Zone 1"])
    .replace(/{Z2}/g, hrZones["Zone 2"]);
  // ... handle other zones if needed
};

const TrainingPlan = ({ raceDate }) => {
  const { results } = useCalculator();
  const raceTimeInSeconds = results.RaceTimeInSeconds; // Assuming this value comes from results

  const calculateWeeksUntilRaceDay = (raceDay) => {
    const currentDate = new Date();
    const raceDate = new Date(raceDay);
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;

    return Math.round((raceDate - currentDate) / millisecondsPerWeek);
  };

  const weeksRemaining = calculateWeeksUntilRaceDay(raceDate);
  const trainingPlanForUser = getWorkoutForRemainingWeeks(
    weeksRemaining,
    raceTimeInSeconds
  );

  return (
    <div>
      {trainingPlanForUser.map((workout, index) => (
        <div key={index}>
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
};
export default TrainingPlan;
