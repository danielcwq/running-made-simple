import React, { useState } from "react";
import Navigation from "@/components/navigation";
import Link from "next/link";
const RacePaceCalculator = () => {
  const [distance, setDistance] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [results, setResults] = useState(null);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return { mins, secs };
  };

  const calculatePace = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    const lapTimeSeconds = totalSeconds * (400 / distance);
    const lapTime = formatTime(lapTimeSeconds);
    const time100m = (lapTimeSeconds / 4).toFixed(1); // One decimal place for 100m
    const time200m = formatTime(lapTimeSeconds / 2); // Split into minutes and seconds for 200m
    const time300m = formatTime(lapTimeSeconds / 1.3333);

    const speedKmH = (distance / 1000 / (totalSeconds / 3600)).toFixed(2); // Speed in km/h
    const cumulativeLapTimes = calculateCumulativeLapTimes(
      distance,
      totalSeconds
    ); // Now calling the function

    setResults({
      speedKmH,
      time100m,
      time200m,
      time300m,
      lapTime,
      lapTimes: cumulativeLapTimes, // Setting the calculated lap times
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculatePace();
  };
  // Utility function to calculate cumulative lap times
  // Utility function to calculate cumulative lap times
  const calculateCumulativeLapTimes = (totalDistance, totalSeconds) => {
    const lapTimeSeconds = totalSeconds / (totalDistance / 400);
    const laps = Math.floor(totalDistance / 400);
    const partialLap = totalDistance % 400;
    const lapTimes = [];

    // If there's a partial lap, calculate its time and push it to the array
    if (partialLap > 0) {
      const partialLapTime = lapTimeSeconds * (partialLap / 400);
      lapTimes.push({
        lap: "0.5",
        cumulativeTime: formatTime(partialLapTime),
      });
    }

    // Start calculating full lap cumulative times from the next full lap
    // Inside calculateCumulativeLapTimes function
    let cumulativeTime =
      partialLap > 0 ? lapTimeSeconds * (partialLap / 400) : 0;
    for (let lap = 1; lap <= laps; lap++) {
      cumulativeTime += lapTimeSeconds;
      const formattedTime = formatTime(cumulativeTime);
      lapTimes.push({
        lap: partialLap > 0 ? (lap + 0.5).toString() : lap.toString(),
        cumulativeTime: formattedTime, // Store the object, not the string
      });
    }

    return lapTimes;
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold my-3 text-center">
            Training Zone Calculator
          </h1>
          <p className="">
            Built by <Link href="https://mokyingren.sg">Mok Ying Ren</Link> and
            <Link href="https://danielching.me"> Daniel Ching</Link>
          </p>
          <Navigation />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="distance">Race Distance (meters):</label>
              <input
                type="number"
                id="distance"
                placeholder="Distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="minutes">Target Race Time:</label>
              <input
                type="number"
                id="minutes"
                value={minutes}
                placeholder="Minutes"
                onChange={(e) => setMinutes(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="number"
                id="seconds"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="Seconds"
                required
                max="59"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Calculate
            </button>
          </form>
          {results && results.lapTimes && (
            <div>
              <h2 className="font-bold text-xl my-2">Results:</h2>
              <p className="my-2">Speed: {results.speedKmH} km/h</p>
              <h3 className="font-bold text-lg my-2">Time per</h3>
              <p className="mt-2"> 100m: {results.time100m} seconds</p>
              <p className="">
                200m: {results.time200m.mins} minutes {results.time200m.secs}{" "}
                seconds
              </p>
              <p className="">
                300m: {results.time300m.mins} minutes {results.time300m.secs}{" "}
                seconds
              </p>
              <p className="mb-2">
                400m: {results.lapTime.mins} minutes {results.lapTime.secs}{" "}
                seconds
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Lap</th>
                    <th>Cumulative Time</th>
                  </tr>
                </thead>
                <tbody>
                  {results.lapTimes.map((lapTimeEntry, index) => (
                    <tr key={index}>
                      <td>{lapTimeEntry.lap}</td>
                      <td>{`${lapTimeEntry.cumulativeTime.mins} minutes ${lapTimeEntry.cumulativeTime.secs} seconds`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RacePaceCalculator;
