import React, { useState } from "react";
import { calculateTrainingPlan } from "../components/calculateTrainingPlan";
import Link from "next/link";
import Navigation from "@/components/navigation";
const TrainingPlanGenerator = () => {
  const [timeTrialMinutes, setTimeTrialMinutes] = useState("");
  const [timeTrialSeconds, setTimeTrialSeconds] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [raceDate, setRaceDate] = useState("");
  const [trainingPlan, setTrainingPlan] = useState([]);
  const [isPlanGenerated, setIsPlanGenerated] = useState(false);

  const handleGeneratePlan = async (event) => {
    event.preventDefault();
    const totalSeconds =
      parseInt(timeTrialMinutes) * 60 + parseInt(timeTrialSeconds);
    // Calculate the number of weeks until the race
    const raceDateObject = new Date(raceDate);
    const currentDate = new Date();
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksUntilRace = Math.round(
      (raceDateObject - currentDate) / millisecondsPerWeek
    );

    // Check if the race date is within the acceptable range
    if (weeksUntilRace <= 8 || weeksUntilRace >= 16) {
      alert("Race date must be between 8 and 16 weeks from today.");
      return; // Exit the function if not within the range
    }

    // If within range, calculate and set the training plan
    try {
      const plan = await calculateTrainingPlan(
        totalSeconds,
        birthdate,
        raceDate
      );
      setTrainingPlan(plan);
      setIsPlanGenerated(true);
    } catch (error) {
      console.error("Error generating training plan:", error);
      // Handle the error appropriately
    }
  };
  const getColor = (phase) => {
    switch (phase) {
      case "Base":
        return "bg-green-100";
      case "Threshold":
        return "bg-yellow-100";
      case "Recovery":
        return "bg-blue-100";
      case "Specific":
        return "bg-red-100";
      case "Taper":
        return "bg-purple-100";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold my-3 text-center">
            2.4km Training Plan Generator - Under Construction
          </h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />
        </div>
        <div>
          <form onSubmit={handleGeneratePlan}>
            <div>
              <label className="block text font-bold mt-2" htmlFor="timeTrial">
                1.2km Time Trial Time:
              </label>
              <input
                type="number"
                placeholder="Minutes"
                value={timeTrialMinutes}
                onChange={(e) => setTimeTrialMinutes(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Seconds"
                value={timeTrialSeconds}
                onChange={(e) => setTimeTrialSeconds(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="birthdate">Birthdate:</label>
              <input
                id="birthdate"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="raceDate">Race Date:</label>
              <input
                id="raceDate"
                type="date"
                value={raceDate}
                onChange={(e) => setRaceDate(e.target.value)}
                required
              />
            </div>
            <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md my-2 hover:bg-blue-700">
              Generate Plan
            </button>
          </form>

          {isPlanGenerated && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Weeks to 2.4km</th>
                    <th>Session 1</th>
                    <th>Session 2</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingPlan && trainingPlan.length > 0 ? (
                    trainingPlan.map((week, index) => (
                      <tr
                        key={index}
                        className={`border-b w-full ${getColor(week["Phase"])}`}
                      >
                        <td className="px-4 py-2 text-justify">
                          {week["Phase"]}
                        </td>
                        <td className="px-4 py-2 text-justify">
                          {week["Weeks to 2.4km"]}
                        </td>
                        <td className="px-4 py-2 text-justify">
                          {" "}
                          {week["Session 1"]}
                        </td>
                        <td className="px-4 py-2 text-justify">
                          {week["Session 2"]}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No training plan available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div>
                <p className="mt-5">
                  Feeling a little extra energy? Do an additional run for 30
                  minutes each week in your Z1 heart rate!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default TrainingPlanGenerator;
