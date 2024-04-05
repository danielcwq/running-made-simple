import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Image from "next/image";
import { useCalculator } from "../hooks/useCalculator";
import { calculateTrainingPlan } from "@/components/calculateTrainingPlanNew";
import html2canvas from "html2canvas";

const NewTrainingPlanPage = () => {
  const {
    Vo2Max,
    setVo2Max,
    timeMinutes,
    setTimeMinutes,
    timeSeconds,
    setTimeSeconds,
    raceDay,
    setRaceDay,
    birthdate,
    setBirthdate,
    validateAndCalculate,
    results,
  } = useCalculator();
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
  const [trainingPlan, setTrainingPlan] = React.useState([]);
  const [activeInput, setActiveInput] = useState("timeTrial");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [weeksUntilRace, setWeeksUntilRace] = useState(null);
  const [calculationTrigger, setCalculationTrigger] = useState(false);
  const [calculationCounter, setCalculationCounter] = useState(0);
  const resultsRef = useRef(null); // Add this line to create a ref for the results section
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    const calculatePlan = async () => {
      // Only proceed if validation passes
      if (validateAndCalculate()) {
        try {
          // Attempt to generate the training plan
          const plan = await calculateTrainingPlan(
            birthdate,
            Vo2Max,
            timeMinutes,
            timeSeconds,
            raceDay,
            validateAndCalculate,
            results
          );
          // Update the training plan state with the new plan
          setTrainingPlan(plan);
        } catch (error) {
          // Log any errors encountered during the plan calculation
          console.error("Failed to calculate the training plan:", error);
        }
      }
    };

    // Trigger the plan calculation
    calculatePlan();

    // Dependencies list has been simplified to only include the calculationCounter.
    // This ensures the effect is only re-run when the calculation is explicitly triggered,
    // avoiding an infinite loop.
  }, [calculationCounter]); // Only re-run the effect when calculationCounter changes

  useEffect(() => {
    if (raceDay && birthdate) {
      const raceDate = new Date(raceDay);
      const currentDate = new Date();
      const differenceInTime = raceDate.getTime() - currentDate.getTime();
      const differenceInWeeks = differenceInTime / (1000 * 3600 * 24 * 7);
      setWeeksUntilRace(differenceInWeeks);
    }
  }, [raceDay]);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (weeksUntilRace < 8 || weeksUntilRace > 16) {
      alert("The race date must be between 8 and 16 weeks from today.");
      return;
    }
    if (validateAndCalculate()) {
      // Assume calculateTrainingPlan uses the validated and calculated data
      try {
        const plan = await calculateTrainingPlan(
          birthdate,
          Vo2Max,
          timeMinutes,
          timeSeconds,
          raceDay,
          validateAndCalculate,
          results
        );
        setTrainingPlan(plan);
      } catch (error) {
        console.error("Failed to calculate the training plan:", error);
      }
    }
    setCalculationTrigger(!calculationTrigger);
    setCalculationCounter((prevCounter) => prevCounter + 1);
  };
  const exportAsImage = () => {
    html2canvas(resultsRef.current).then((canvas) => {
      // Create an image from the canvas
      const image = canvas.toDataURL("image/png", 1.0);

      // Create a link to trigger the download
      let downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = "training-plan.png";

      // Append the link to the document and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

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
            <li>2. Input your birthdate. </li>
            <li>
              3. Select an IPPT date 8 to 16 weeks from now and generate the
              plan!
            </li>
          </ol>
        </div>
        <div className="mt-2">
          <form onSubmit={handleSubmit}>
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
            <div>
              <label htmlFor="raceDate" className="block text-sm font-medium">
                Race Date:
              </label>
              <input
                id="raceDate"
                type="date"
                value={raceDay}
                onChange={(e) => setRaceDay(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            {/* Error display */}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md my-2 hover:bg-blue-700"
            >
              Generate Training Plan
            </button>
          </form>

          {/* Results display */}
          <div ref={resultsRef}>
            {results.estimatedRaceTime && results.calculatedVo2Max && (
              <div>
                <div>
                  <p>Generated on {currentDate}</p>
                  <h2 className="font-bold text-lg my-2">Training Zones</h2>
                  <table className="min-w-full divide-y divide-gray-200 mt-2 border-collapse">
                    <thead>
                      <tr>
                        <th className="border">Zone Type</th>
                        <th className="border"> Pacing Zone</th>
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
                </div>
              </div>
            )}

            {trainingPlan.length > 0 && (
              <>
                <p className="text-2xl my-3 text-center">2.4km Training Plan</p>
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
                <button
                  onClick={exportAsImage}
                  className="px-4 py-2 mt-4 bg-blue-500 text-white font-bold rounded"
                >
                  Export as Image
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewTrainingPlanPage;
