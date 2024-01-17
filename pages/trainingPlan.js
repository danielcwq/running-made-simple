import React from "react";
import { useCalculator } from "../hooks/useCalculator";

const allWorkouts = {
  "1a": { description: "1.2km Time Trial on Track (3 laps)" },
  "1b": { description: "4min {Z2}, 4min {Z1}, 4min {Z2}" },
  "2a": { description: "(200m Z3, 1min {Z1})x6 " }, // additional logic to input Z3 zones and calculations by ratio here
  "2b": { description: "5min {Z2}, 4min {Z1}, 5min {Z2}" },
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
