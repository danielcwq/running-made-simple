import React, { useState, useEffect } from "react";
import { calculateTrainingPlan } from "./calculateTrainingPlan";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { calculateTrainingPlanData } from "./calculateTrainingPlan";
import Image from "next/image";
const TrainingPlanGenerator = () => {
  const [timeTrialMinutes, setTimeTrialMinutes] = useState("");
  const [timeTrialSeconds, setTimeTrialSeconds] = useState("");
  const [Vo2Max, setVo2Max] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [raceDate, setRaceDate] = useState("");
  const [trainingPlan, setTrainingPlan] = useState([]);
  const [isPlanGenerated, setIsPlanGenerated] = useState(false);
  const [z3Speed, setZ3Speed] = useState(0);
  const [activeInput, setActiveInput] = useState("");
  const [hrZonesAndPaces, setHrZonesAndPaces] = useState({
    heartRateZones: {},
    paces: {},
  });

  const handleGeneratePlan = async (event) => {
    event.preventDefault();
    let inputForCalculation;
    let isVo2Max = activeInput === "Vo2Max";

    if (isVo2Max) {
      inputForCalculation = parseFloat(Vo2Max);
      if (isNaN(inputForCalculation)) {
        console.error("Vo2Max must be a numeric value.");
        return;
      }
    } else {
      const minutes = parseInt(timeTrialMinutes);
      const seconds = parseInt(timeTrialSeconds);
      if (isNaN(minutes) || isNaN(seconds)) {
        console.error("Time trial inputs must be numeric values.");
        return;
      }
      inputForCalculation = minutes * 60 + seconds;
    }

    // Calculate the number of weeks until the race
    const weeksUntilRace = Math.round(
      (new Date(raceDate) - new Date()) / (1000 * 60 * 60 * 24 * 7)
    );

    // Check if the race date is within the acceptable range
    if (weeksUntilRace < 8 || weeksUntilRace > 16) {
      alert("Race date must be between 8 and 16 weeks from today.");
      return;
    }

    // Perform the calculation only after the button is clicked
    const planData = calculateTrainingPlanData(
      birthdate,
      inputForCalculation,
      isVo2Max
    );
    const { paces: z3Paces, heartRateZones: hrZones } = planData;
    setHrZonesAndPaces(planData);

    // If within range, calculate and set the training plan
    try {
      const plan = await calculateTrainingPlan(
        birthdate,
        raceDate,
        z3Paces,
        hrZones
      );
      setTrainingPlan(plan);
      setIsPlanGenerated(true);
    } catch (error) {
      console.error("Error generating training plan:", error);
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
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="w-28 h-28 relative mr-4 mb-4 sm:mb-0">
            <Image
              src="/icon.jpg"
              alt="Running Made Simple icon"
              layout="fill"
              className="rounded-full"
              objectFit="cover"
            />
          </div>
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
              best estimate. OR input your watch-estimated Vo2Max.
            </li>
            <li>2. Select an IPPT date 8 to 16 weeks from now.</li>
            <li>3. Input your birthdate and generate the plan!</li>
          </ol>
        </div>
        <div>
          <form onSubmit={handleGeneratePlan}>
            <div className="flex justify-around mb-4">
              <button
                type="button"
                onClick={() => setActiveInput("timeTrial")}
                className={`py-2 px-4 font-medium rounded-md ${
                  activeInput === "timeTrial"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
              >
                1.2km Time Trial
              </button>
              <button
                type="button"
                onClick={() => setActiveInput("Vo2Max")}
                className={`py-2 px-4 font-medium rounded-md ${
                  activeInput === "Vo2Max"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
              >
                VO2 Max (from watch)
              </button>
            </div>

            {/* Input field for 1.2km time trial */}
            <div
              style={{
                display: activeInput === "timeTrial" ? "block" : "none",
              }}
            >
              <label className="block text-sm font-medium">
                Most Current Time or Best Estimate for 1.2km run:
              </label>
              <input
                type="number"
                placeholder="Minutes"
                value={timeTrialMinutes}
                onChange={(e) => setTimeTrialMinutes(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Seconds"
                value={timeTrialSeconds}
                onChange={(e) => setTimeTrialSeconds(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Input field for VO2 Max */}
            <div
              style={{ display: activeInput === "Vo2Max" ? "block" : "none" }}
            >
              <label className="block text-sm font-medium">
                Enter your VO2 Max Estimate (from watch):
              </label>
              <input
                type="number"
                placeholder="VO2 Max"
                value={Vo2Max}
                onChange={(e) => setVo2Max(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Birthday input */}
            <div>
              <label className="block text-sm font-medium">Birthday:</label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
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

          {isPlanGenerated &&
            hrZonesAndPaces.heartRateZones &&
            hrZonesAndPaces.paces && (
              <div>
                <p className="text-2xl my-3 text-center">
                  Your Personalised 2.4km Training Plan
                </p>
                <p>Plan generated on {currentDate}</p>{" "}
                <div className="mt-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Heart Rate Zones
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200 mt-2 border-collapse">
                    <thead>
                      <tr>
                        <th className="border">Zone</th>
                        <th className="border">BPM Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(hrZonesAndPaces.heartRateZones).map(
                        ([zone, bpmRange], index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">{zone}</td>
                            <td className="border px-4 py-2">{bpmRange}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Track Pacing
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200 mt-2 border-collapse">
                    <thead>
                      <tr>
                        <th className="border">Distance</th>
                        <th className="border">Target Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Map through each zone and pace to create table rows */}
                      {Object.entries(hrZonesAndPaces.paces).map(
                        ([zone, pace], index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">{zone}</td>
                            <td className="border px-4 py-2">{pace}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
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
                          className={`border-b w-full ${getColor(
                            week["Phase"]
                          )}`}
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
