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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateAndCalculate();
    if (!isValid) {
      console.log(errors);
    } else {
    }
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

            <button
              type="submit"
              className="py-2 px-4 font-medium rounded-md bg-blue-600 text-white"
            >
              Calculate
            </button>

            {/* Results display */}
            {results.estimatedRaceTime && results.calculatedVo2Max && (
              <div>
                <div>
                  <h2 className="font-bold text-xl my-2">Training Zones</h2>
                  <table className="min-w-full divide-y divide-gray-200 mt-2 border-collapse">
                    <thead>
                      <tr>
                        <th className="border">Zone Type</th>
                        <th className="border">Heart Rate Zone</th>
                        <th className="border"> HR Range </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="border p-2 bg-green-100" rowSpan={3}>
                          Easy
                        </td>
                        <td className="border p-2 bg-green-100">Z1 (51-60%)</td>
                        <td className="border p-2 bg-green-100">
                          {results.Hzones["Z1 (51-60%)"]}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 bg-green-100">Z2 (61-70%)</td>
                        <td className="border p-2 bg-green-100">
                          {results.Hzones["Z2 (61-70%)"]}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 bg-green-100">Z3 (71-80%)</td>
                        <td className="border p-2  bg-green-100">
                          {results.Hzones["Z3 (71-80%)"]}
                        </td>
                      </tr>
                      <tr className="bg-yellow-100 border p-3">
                        <td className="border p-2 ">Threshold</td>
                        <td className="border p-2 ">Z4 (81-90%)</td>
                        <td className="border p-2 ">
                          {results.Hzones["Z4 (81-90%)"]}
                        </td>
                      </tr>
                      <tr>
                        {/* Your dropdown toggle cell */}
                        <td colSpan="3" className="border p-2">
                          <button
                            onClick={toggleDropdown}
                            className="text-left w-full flex justify-between items-center"
                          >
                            We don't use HR for hard sessions, but if you
                            insist:
                            <span
                              className={
                                isDropdownOpen ? "transform rotate-180" : ""
                              }
                            >
                              ⬇️
                            </span>
                          </button>
                        </td>
                      </tr>
                      {isDropdownOpen && (
                        <tr className="bg-red-100">
                          <td className="border p-2">Hard *</td>
                          <td className="border p-2">Z5 (91-100%)</td>
                          <td className="border p-2">
                            {results.Hzones["Z5 (91-100%)"]}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="p-2">
                    <h2 className="font-bold my-2">Z5 Pacing</h2>
                    <div className="p-2 border-2 border-gray-200 rounded-lg bg-gray-50">
                      <div className="mt-2 space-y-2">
                        <p>
                          Estimated 2.4km Race Time: {results.estimatedRaceTime}
                        </p>
                      </div>
                    </div>

                    <p className="italic mt-2">Track Pacing</p>
                    <table className="min-w-full divide-y divide-gray-200 mt-2 ">
                      <thead>
                        <tr>
                          <th>Distance</th>
                          <th>2.4km Pacing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {Object.entries(results.pacing).map(
                          ([distance, time]) => (
                            <tr key={distance}>
                              <td>{distance}</td>
                              <td>{time}</td>
                            </tr>
                          )
                        )}
                        {/* Insert an empty row */}
                        <tr className="bg-gray-200">
                          <td colSpan="2">&nbsp;</td>{" "}
                          {/* Use &nbsp; to insert a non-breaking space, or leave it empty for a completely empty cell */}
                        </tr>
                        {/* Row for displaying HardSpeed */}
                        <tr>
                          <td>Treadmill Speed</td>
                          <td>{results.HardSpeed} km/h</td>
                        </tr>
                      </tbody>
                    </table>
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
