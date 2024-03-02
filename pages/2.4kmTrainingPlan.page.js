import React, { useState, useEffect } from "react";
import { calculateTrainingPlan } from "../components/calculateTrainingPlan";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { calculateTrainingPlanData } from "../components/calculateTrainingPlan";
const TrainingPlanGenerator = () => {
  const [timeTrialMinutes, setTimeTrialMinutes] = useState("");
  const [timeTrialSeconds, setTimeTrialSeconds] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [raceDate, setRaceDate] = useState("");
  const [trainingPlan, setTrainingPlan] = useState([]);
  const [isPlanGenerated, setIsPlanGenerated] = useState(false);
  const [z3Speed, setZ3Speed] = useState(0);
  const [hrZonesAndPaces, setHrZonesAndPaces] = useState({
    heartRateZones: {},
    paces: {},
  });
  useEffect(() => {
    if (birthdate && timeTrialSeconds) {
      const data = calculateTrainingPlanData(birthdate, timeTrialSeconds);
      setHrZonesAndPaces(data);
    }
  }, [birthdate, timeTrialSeconds]);
  const handleGeneratePlan = async (event) => {
    event.preventDefault();
    const totalSeconds =
      parseInt(timeTrialMinutes) * 60 + parseInt(timeTrialSeconds);
    const z3SpeedCalculated =
      (100 / ((totalSeconds * Math.pow(2, 1.06)) / 24)) * 3.6;
    setZ3Speed(z3SpeedCalculated.toFixed(1));

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
      return {
        z3Speed,
      };
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
            2.4km Training Plan Generator for Beginners
          </h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Instructions-follow 3 simple steps to get started!
          </h2>
          <ol className="mt-2 text-sm text-gray-600 space-y-2">
            <li>
              1. Do a 1.2km time trial around the track (3 laps)/ input your
              best estimate.
            </li>
            <li>2. Select an IPPT date 8 to 16 weeks from now.</li>
            <li>3. Input your birthdate and generate the plan!</li>
          </ol>
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
              <p className="text-2xl  my-3 text-center">
                Your Personalised 2.4km Training Plan
              </p>
              <div className="mb-5 p-4 border-2 border-gray-200 rounded-lg bg-gray-50 shadow-md">
                <p>Your training zones (values reflected in the table too):</p>
                Zone 1 is <b>{hrZonesAndPaces.heartRateZones.Z1}</b>{" "}
                <p>
                  Zone 2 is <b>{hrZonesAndPaces.heartRateZones.Z2}</b>
                </p>
                <p>
                  {" "}
                  Zone 3 speed is <b>{z3Speed}km/h</b>
                </p>
                <Link
                  href="https://www.youtube.com/watch?v=OR9RMuVBtSM&ab_channel=MOKYingRen"
                  className="hover:text-blue-600 italic text-center"
                >
                  How do I use this program?
                </Link>
              </div>
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
