import React, { useState } from "react";
import { useEffect } from "react";
import { useCalculator } from "./calculations";

const calculateWeeksUntilRaceDay = (raceDay) => {
  const currentDate = new Date();
  const raceDate = new Date(raceDay);
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;

  return Math.round((raceDate - currentDate) / millisecondsPerWeek);
};
const weeksRemaining = calculateWeeksUntilRaceDay(raceDay);

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
const workoutPlanMapping = {};

const getWorkoutForRemainingWeeks = (weeksRemaining) => {};

//function to map Z1 and Z2. remember to add <TrainingPlan trainingPlanData (or whatever it's called) to main component and add as prop>- refer to ChatGPT later
const replaceZonePlaceholders = (workoutDescription, hrZones) => {
  return workoutDescription
    .replace(/{Z1}/g, hrZones["Zone 1"])
    .replace(/{Z2}/g, hrZones["Zone 2"]);
  // ... handle other zones if needed
};
const TrainingPlan = ({ raceDate, hrZones }) => {
  const weeksRemaining = calculateWeeksUntilRaceDay(raceDate);
  const trainingPlanForUser = getWorkoutForRemainingWeeks(weeksRemaining);
  return (
    <div>
      {trainingPlanData.map((week) => (
        <div key={week.week} className="mb-4">
          <h3 className="text-lg font-semibold">
            Week {week.week}: {week.phase} (Starting {week.startDate})
          </h3>
          <ul>
            {Object.entries(week.sessions).map(([day, session]) => (
              <li key={day} className="mt-1">
                <strong>{day}:</strong>{" "}
                {replaceZoneTextWithHRValues(session, hrZones)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
