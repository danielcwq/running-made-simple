import React, { useState } from "react";
import { useEffect } from "react";
import { useCalculator } from "../hooks/useCalculator";
import Link from "next/link";
import TrainingPlan from "./trainingPlan";
import Navigation from "@/components/navigation";

//Init

export default function TrainingZones() {
  const {
    timeMinutes,
    setTimeMinutes,
    timeSeconds,
    setTimeSeconds,
    birthdate,
    setBirthdate,
    raceDay,
    setRaceDay,
    errors,
    results,
    validateAndCalculate,
  } = useCalculator();
  const [activeTab, setActiveTab] = useState("racePacing");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log("results when switching to $(tabName):", results);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateAndCalculate();
    if (!isValid) {
      // Handle the invalid case, such as showing errors
      // Error messages are available in the 'errors' object
      console.log(errors);
    } else {
      // Proceed with the valid input case
      // ...
    }
    console.log("Rendering content for tab: ", activeTab);
    console.log("Current results: ", results);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold my-3 text-center">
            Training Zone Calculator
          </h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mt-2">
                Most Current Time or Best Estimate for 1.2km run:
              </label>
              <input
                type="number"
                placeholder="Minutes"
                value={timeMinutes}
                onChange={(e) => setTimeMinutes(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Seconds"
                value={timeSeconds}
                onChange={(e) => setTimeSeconds(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Birthday:</label>
              <input
                type="date"
                placeholder="Age"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            {/*
            <div>
              <label>Race Day:</label>
              <input
                type="date"
                value={raceDay}
                onChange={(e) => setRaceDay(e.target.value)}
              />
            </div>
            */}

            {errors.time && <p className="error">{errors.time}</p>}
            {errors.age && <p className="error">{errors.age}</p>}
            {/*
            {errors.raceDay && <p className="error">{errors.raceDay}</p>}
          */}
            <div className="flex">
              {/*
              <button
                onClick={() => handleTabChange("racePacing")}
                className={`py-2 px-4 mr-2 font-medium rounded-md ${
                  activeTab === "racePacing"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
              >
                Race Day Pacing
              </button>
              */}

              <button
                onClick={() => handleTabChange("zones")}
                className={`py-2 px-4 font-medium rounded-md ${
                  activeTab === "zones"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
              >
                Zones
              </button>
              {/*
               <button
                onClick={() => handleTabChange("trainingPlan")}
                className={`py-2 px-4 ml-2 font-medium rounded-md ${
                  activeTab === "trainingPlan"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border border-blue-600"
                }`}
              >
                Training Plan
              </button>
              */}
            </div>
            <div>
              {/*
              {activeTab === "racePacing" && (
                <div>
                  <h2 className="font-bold text-xl my-2">Results</h2>
                  <h2 className="font-semibold text-lg">
                    Estimated Race Time:{" "}
                  </h2>
                  {results.estimatedRaceTime}

                  <h2 className="font-semibold text-lg my-2">
                    Race Day Pacing
                  </h2>
                  <ul>
                    {Object.entries(results.pacing).map(([distance, time]) => (
                      <li key={distance}>
                        {distance} Pacing: {time}
                      </li>
                    ))}
                  </ul>
                  <h2 className="font-semibold text-lg my-2">
                    Cumulative Lap Times
                  </h2>
                  <ul>
                    {Object.entries(results.cumulativeLapTime).map(
                      ([lap, time]) => (
                        <li key={lap}>
                          {lap} : {time}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
                      */}
              {activeTab === "zones" && (
                <div>
                  <h2 className="font-bold text-xl my-2">Training Zones</h2>
                  <ul>
                    {Object.entries(results.Hzones).map(
                      ([zone, description]) => (
                        <li key={zone}>
                          <strong>{zone}</strong>: {description}
                        </li>
                      )
                    )}
                  </ul>
                  <div>
                    <h2 className="font-bold my-2">Zone 3</h2>
                    <p className="italic">2.4km (VO2 Max) Pacing</p>
                    <ul>
                      {Object.entries(results.pacing).map(
                        ([distance, time]) => (
                          <li key={distance}>
                            {distance} Pacing: {time}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="my-3">
                      Run at <strong>{results.zone3pace} per km </strong>or{" "}
                      <strong>
                        {results.zone3speed}
                        km/h
                      </strong>{" "}
                      on treadmill
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "trainingPlan" && (
                <TrainingPlan raceDay={raceDay} />
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
