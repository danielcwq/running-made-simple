import React from "react";
import { useCalculator } from "../../hooks/useCalculator";

const allWorkouts = {
  "Z1.30": { description: "30min at Z1" },
  "Z2.2": { description: "5 x (2min Z2, 2min Z1)" },
  "Z2.3": { description: "3 x (3min Z2, 3min Z1)" }, // additional logic to input Z3 zones and calculations by ratio here
  "Z2.4": { description: "3 x (4min Z2, 2min Z2)" },
  "Z2.5": { description: "2 x (5min Z2, 5min Z1)" },
  "Z2.6": { description: "2 x (6min Z2, 3min Z1)" },
  "2.4/200": { description: "8 x (200m @2.4km Pace, {Z3 200m} recovery)" },
  "2.4/300": { description: "5 x (300m @2.4km Pace, {Z3 300m} recovery" },
  "2.4/400": { description: "4 x (400m @2.4km Pace, {Z3 400m} recovery" },
  "2.4/500": { description: "3 x (500m @2.4km Pace, {Z3 500m} recovery" },
  "2.4/600": { description: "4 x (600m @2.4km Pace, {Z3 600m} recovery" },
  "2.4/800": { description: "2 x (800m @2.4km Pace, {Z3 800m} recovery" },
  "2.4/1000": { description: "2 x (400m @2.4km Pace, {Z3 1000m} recovery" },
  // ... other workouts ...
};

const workoutSchedule = {
  12: ["1a", "1b", "2a", "2b", "3a", "3b", "12a", "12b"],
  4: ["1a", "1b", "2a", "2b", "1a", "2b", "2a", "2b"],
  1: ["1a", "1b"],
  // ... other specific schedules ...
};

const getWorkoutForRemainingWeeks = (weeksRemaining) => {
  const selectedWorkouts =
    workoutSchedule[weeksRemaining] || workoutSchedule[12];
  return selectedWorkouts.map((workoutId) => {
    let description = allWorkouts[workoutId].description;

    // Replace placeholders with race time data
    description = description.replace(
      /{Z1}/g,

      "Z1"
    ); // Replace with actual logic to insert HR Zone data
    description = description.replace(/{Z2}/g, "Z2");
    // Add more replacements for other zones if needed

    return {
      ...allWorkouts[workoutId],
      description: description,
    };
  });
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
    <table>
      <thead>
        <tr>
          <th>Week</th>
          <th>Workout 1</th>
          <th>Workout 2</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(workoutSchedule).map((week, index) => (
          <tr key={index}>
            <td>{`Week ${week}`}</td>
            {trainingPlanForUser[week].map((workout, idx) => (
              <td key={idx}>{workout.description}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrainingPlan;
