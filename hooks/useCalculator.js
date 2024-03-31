import { useState } from "react";

export const useCalculator = () => {
  // State hooks
  const [timeMinutes, setTimeMinutes] = useState("");
  const [timeSeconds, setTimeSeconds] = useState("");
  const [Vo2Max, setVo2Max] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [raceDay, setRaceDay] = useState("");
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState({
    estimatedRaceTime: "",
    pacing: {},
    cumulativeLapTime: {},
    Hzones: {},
    HardSpeed: "",
    HardPace: "",
    calculatedVo2Max: "",
  });
  function calculateRaceTime(v) {
    var d = 2400; // Fixed distance for prediction
    var t = d * 0.004; // Initial time estimate
    var n = 0;
    var c, i, e, dc, di, dt;

    if (isNaN(v)) {
      console.error("VO2Max value must be numeric.");
      return null;
    }

    do {
      c = -4.6 + (0.182258 * d) / t + (0.000104 * d * d) / t / t;
      i =
        0.8 +
        0.1894393 * Math.exp(-0.012778 * t) +
        0.2989558 * Math.exp(-0.1932605 * t);
      e = Math.abs(c - i * v);
      dc = (-0.182258 * d) / t / t - (2 * 0.000104 * d * d) / t / t / t;
      di =
        -0.012778 * 0.1894393 * Math.exp(-0.012778 * t) -
        0.1932605 * 0.2989558 * Math.exp(-0.1932605 * t);
      dt = (c - i * v) / (dc - di * v);
      t -= dt;
      n++;
    } while (n < 10 && e > 0.1);

    var RaceTimeInSeconds = Math.round(t * 60); // Round to nearest second
    return RaceTimeInSeconds;
  }
  function calculateVo2Max(timeInSeconds) {
    var d = 1200; // Fixed distance
    var t = timeInSeconds / 60;
    if (isNaN(t)) {
      console.error("Time value must be numeric.");
      return null;
    }

    var c = -4.6 + (0.182258 * d) / t + (0.000104 * d * d) / t / t;
    var i =
      0.8 +
      0.1894393 * Math.exp(-0.012778 * t) +
      0.2989558 * Math.exp(-0.1932605 * t);
    var calculatedVo2Max = Math.round((1000 * c) / i) / 1000; // Calculate VO2Max and round to three decimal places

    return calculatedVo2Max;
  }

  const performCalculations = () => {
    let RaceTimeInSeconds;
    let calculatedVo2Max;
    if (Vo2Max) {
      RaceTimeInSeconds = calculateRaceTime(Vo2Max); // Fixed to store result of calculateRaceTime in RaceTimeInSeconds
      calculatedVo2Max = Vo2Max; // This line remains as is
    } else {
      const totalTimeInSeconds =
        parseInt(timeMinutes) * 60 + parseInt(timeSeconds);
      calculatedVo2Max = calculateVo2Max(totalTimeInSeconds);
      RaceTimeInSeconds = totalTimeInSeconds * Math.pow(2, 1.06);
    }

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
      "1000m": `${Math.floor(RaceTimeInSeconds / 2.4 / 60)}m ${Math.floor(
        (RaceTimeInSeconds / 2.4) % 60
      )}s`,
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
    const calculateAge = (birthdate) => {
      const birthDate = new Date(birthdate);
      const difference = Date.now() - birthDate.getTime();
      const ageDate = new Date(difference);
      return Math.abs(ageDate.getUTCFullYear() - 1970).toFixed(5);
    };
    const calculateHRZones = () => {
      const age = calculateAge(birthdate);
      const maxHeartRate = 211 - 0.64 * age;
      const hrZone1 = 0.51 * maxHeartRate;
      const hrZone2Start = 0.61 * maxHeartRate;
      const hrZone2End = 0.7 * maxHeartRate;
      const hrZ3End = 0.8 * maxHeartRate;
      const thresholdZoneStart = 0.81 * maxHeartRate;
      const thresholdZoneEnd = 0.9 * maxHeartRate;
      const Hzones = {
        //"Maximum Heart Rate": `${Math.round(maxHeartRate)}bpm`, <- find a way to input this too
        "Z1 (51-60%)": `<${Math.round(hrZone2Start)}bpm`,
        "Z2 (61-70%)": `from ${Math.round(hrZone2Start)}bpm - ${Math.round(
          hrZone2End
        )}bpm`,
        "Z3 (71-80%)": `from ${Math.round(hrZone2End)}bpm - ${Math.round(
          hrZ3End
        )}bpm`,
        "Threshold (81-90%)": `from ${Math.round(
          thresholdZoneStart
        )}bpm - ${Math.round(thresholdZoneEnd)}bpm`,
        "Z5 (91-100%)": `from ${Math.round(thresholdZoneEnd)}bpm - ${Math.round(
          maxHeartRate
        )}bpm`,
      };
      return Hzones;
    };
    const Hzones = calculateHRZones();
    const HardSpeed = `${Math.floor((3600 / RaceTimeInSeconds) * 2.4)}`;
    const HardPace = `${Math.floor(RaceTimeInSeconds / 2.4 / 60)}m ${Math.floor(
      (RaceTimeInSeconds / 2.4) % 60
    )}s`;
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
      HardSpeed,
      HardPace,
      calculatedVo2Max,
    });
  };
  // Function to validate inputs and perform calculations for date, time and age
  const validateAndCalculate = () => {
    // Reset errors
    setErrors({});

    // Check for empty inputs and set errors accordingly
    let newErrors = {};
    if (!Vo2Max.trim() && (!timeMinutes.trim() || !timeSeconds.trim())) {
      newErrors.Vo2Max =
        "Please enter either a VO2 max value or both minutes and seconds for the time.";
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
    Vo2Max,
    setVo2Max,
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
