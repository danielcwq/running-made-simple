import React, { useState } from "react";
import { useEffect } from "react";
import { useCalculator } from "../hooks/useCalculator";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Image from "next/image";
//Init

export default function TrainingZones() {
  const {
    Vo2Max,
    setVo2Max,
    timeMinutes,
    setTimeMinutes,
    timeSeconds,
    setTimeSeconds,
    birthdate,
    setBirthdate,
    errors,
    results,
    validateAndCalculate,
  } = useCalculator();
  const [activeInput, setActiveInput] = useState("timeTrial");
  //const handleTabChange = (tab) => {
  //  setActiveTab(tab);
  //  console.log("results when switching to $(tabName):", results);
  //};

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
    //console.log("Rendering content for tab: ", activeTab);
    console.log("Current results: ", results);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:max-w-xl">
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
            Training Zone Calculator
          </h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md md:max-w-xl"
          >
            {/* Input selection buttons */}
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
            {/* Error display */}
            {Object.values(errors).map((error, index) => (
              <p key={index} className="error">
                {error}
              </p>
            ))}

            {/* Calculate button */}
            <button
              type="submit"
              className="py-2 px-4 font-medium rounded-md bg-blue-600 text-white"
            >
              Calculate
            </button>

            {/* Results display */}
            {results.estimatedRaceTime && (
              <div>
                <h2 className="font-bold text-xl my-2">Results</h2>
                <p>Estimated 2.4km Race Time: {results.estimatedRaceTime}</p>
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
                    <h2 className="font-bold my-2">Zone 5</h2>
                    <p className="italic">2.4km (VO2 Max) Track Pacing</p>
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
                      Run at <strong>{results.HardPace} per km </strong>or{" "}
                      <strong>
                        {results.HardSpeed}
                        km/h
                      </strong>{" "}
                      on treadmill
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
