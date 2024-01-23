import { useState } from "react";

export const useCalculator = () => {
  // State hooks
  const [timeMinutes, setTimeMinutes] = useState("");
  const [timeSeconds, setTimeSeconds] = useState("");

  const [birthdate, setBirthdate] = useState("");
  const [raceDay, setRaceDay] = useState("");
  const [errors, setErrors] = useState({}); // New state for managing errors
  const [results, setResults] = useState({
    estimatedRaceTime: "",
    pacing: {},
    cumulativeLapTime: {},
    Hzones: {},
    zone3speed: "",
    zone3pace: "",
  });
  // Performing the calculations and fill the paceCalculator, pacing and zones
  const performCalculations = () => {
    // Convert time to seconds for calculation
    const totalTimeInSeconds =
      parseInt(timeMinutes) * 60 + parseInt(timeSeconds);
    // Now perform your calculations based on totalTimeInSeconds
    const RaceTimeInSeconds = totalTimeInSeconds * Math.pow(2, 1.06);
    const pacing = {
      "100m": `${(RaceTimeInSeconds / 24).toFixed(0)}s`,
      "200m": `${Math.floor(RaceTimeInSeconds / 12 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 12) % 60
      )}s`,
      "300m": `${Math.floor(RaceTimeInSeconds / 8 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 8) % 60
      )}s`,
      "400m": `${Math.floor(RaceTimeInSeconds / 6 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 6) % 60
      )}s`,
      /*"600m": `${Math.floor(RaceTimeInSeconds / 4 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 4) % 60
      )}s`,
      "800m": `${Math.floor(RaceTimeInSeconds / 3 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 3) % 60
      )}s`,
      */
    };
    const cumulativeLapTime = {
      "Lap 1": `${Math.floor(RaceTimeInSeconds / 6 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 6) % 60
      )}s`,
      "Lap 2": `${Math.floor(RaceTimeInSeconds / 4 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 4) % 60
      )}s`,
      "Lap 3": `${Math.floor(RaceTimeInSeconds / 2 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 2) % 60
      )}s`,
      "Lap 4": `${Math.floor(RaceTimeInSeconds / 1.5 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 1.5) % 60
      )}s`,
      "Lap 5": `${Math.floor(RaceTimeInSeconds / 1.2 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 1.2) % 60
      )}s`,
    };
    const calculateAge = (birthdate) =>{
      const birthDate= new Date(birthdate);
      const difference = Date.now()-birthDate.getTime();
      const ageDate = new Date(difference);
      return Math.abs(ageDate.getUTCFullYear()-1970).toFixed(5);
    }
    const calculateHRZones = () => {
      const age = calculateAge(birthdate);
      const maxHeartRate = 211 - 0.54 * age;
      const hrZone1 = 0.7 * maxHeartRate;
      const hrZone2Start = 0.8 * maxHeartRate;
      const hrZone2End = 0.88 * maxHeartRate;
      const Hzones = {
        "Zone 1": `<${Math.round(hrZone1)}bpm`,
        "Zone 2": `from ${Math.round(hrZone2Start)}bpm - ${Math.round(
          hrZone2End
        )}bpm`,
      };
      return Hzones;
    };
    const Hzones = calculateHRZones();
    const zone3speed = `${Math.floor((3600 / RaceTimeInSeconds) * 2.4)}`;
    const zone3pace = `${Math.floor(
      RaceTimeInSeconds / 2.4 / 60
    )}m ${Math.floor((RaceTimeInSeconds / 2.4) % 60)}s`;
    // Calculate estimated race time as an example
    const estimatedRaceTime = `${Math.floor(
      RaceTimeInSeconds / 1 / 60
    )}m ${Math.floor((RaceTimeInSeconds / 1) % 60)}s`;
    // Update results state
    setResults({
      pacing,
      cumulativeLapTime,
      Hzones,
      estimatedRaceTime,
      zone3speed,
      zone3pace,
    });
  };
  // Function to validate inputs and perform calculations for date, time and age
  const validateAndCalculate = () => {
    // Reset errors
    setErrors({});

    // Check for empty inputs and set errors accordingly
    let newErrors = {};
    if (!timeMinutes.trim() || !timeSeconds.trim()) {
      newErrors.time = "Please enter both minutes and seconds for the time.";
    }

    /*
    if (!raceDay.trim()) {
      newErrors.raceDay = "Please enter a race day.";
    } else {
      // Validate race day
      const selectedDate = new Date(raceDay);
      selectedDate.setHours(0, 0, 0, 0);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const twelveWeeksLater = new Date(
        currentDate.getTime() + 12 * 7 * 24 * 60 * 60 * 1000
      );

      if (selectedDate > twelveWeeksLater || selectedDate < currentDate) {
        newErrors.raceDay =
          "Race day must be within 12 weeks from today and cannot be in the past.";
      }
    }
*/
    // Update the errors state if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false; // Indicate that validation failed
    }

    // If validation passes, perform the calculations
    performCalculations();
    // Return true to indicate success
    return true;
  };
  //Space for calculating per lap splits and sec

  // Return state, setters, and validation function
  return {
    timeMinutes,
    setTimeMinutes,
    timeSeconds,
    setTimeSeconds,
    raceDay,
    setRaceDay,
    errors,
    results,
    validateAndCalculate,
    birthdate,
    setBirthdate,
  };
};
