function calculateVO2MAX() {
  var t = 0,
    distance,
    multiplier,
    flag = 0;
  var d, c, i;

  var selectDist = new Array(
    0.9144, //1 yard				//distances in meters
    1.0, //1 meter
    402.336, //1 lap
    1609.344, //1 mile
    1000.0, //1 Km
    5000.0, //5K
    10000.0, //10K
    21097.494, //1/2 Marathon
    42194.988 //Marathon
  );

  for (var j = 0; j < 5; j++) {
    if (isNaN(document.vo2maxForm.elements[j].value)) {
      flag = 1;
    }
  }

  if (flag == 1) alert("Please enter numbers only - no text!");

  for (var j = 0; j < 3; j++) {
    t += Math.pow(60, 1 - j) * document.vo2maxForm.hms[j].value;
  }

  distance = selectDist[document.vo2maxForm.distances.value];
  multiplier = document.vo2maxForm.mult.value;
  d = distance * multiplier; //distance in meters
  c = -4.6 + (0.182258 * d) / t + (0.000104 * d * d) / t / t; //c(t) or Oxygen Cost
  i =
    0.8 +
    0.1894393 * Math.exp(-0.012778 * t) + //i(t) or % VO2 Max
    0.2989558 * Math.exp(-0.1932605 * t);
  document.vo2maxForm.displayVO2MAX.value = Math.round((1000 * c) / i) / 1000;
  document.tableForm.inputVO2MAX.value = Math.round((1000 * c) / i) / 1000;
}

function calculateTable() {
  var d, t, n, c, i, e, v, dc, di, dt, h, m, s;

  var displayDist = new Array(
    402.336, //1 lap					//distances in meters
    1609.344, //1 mile
    5000, //5K
    10000, //10K
    21097.494, //1/2 Marathon
    42194.988 //Marathon
  );

  v = document.tableForm.inputVO2MAX.value;
  if (isNaN(v)) {
    alert("Please enter numerical values only. No text or blank spaces!");
  }

  for (
    var row = 0;
    row < 6;
    row++ //for each distance in array
  ) {
    d = displayDist[row]; //distance in meters
    t = d * 0.004; //start with a reasonable guess
    n = 0;
    do //start of iteration loop
    {
      c = -4.6 + (0.182258 * d) / t + (0.000104 * d * d) / t / t; //c(t) or Oxygen Cost
      i =
        0.8 +
        0.1894393 * Math.exp(-0.012778 * t) + //i(t) or Intensity
        0.2989558 * Math.exp(-0.1932605 * t);
      e = Math.abs(c - i * v); //distance between curves
      dc = (-0.182258 * d) / t / t - (2 * 0.000104 * d * d) / t / t / t; //dc(t)/dt or slope of c(t) curve
      di =
        -0.012778 * 0.1894393 * Math.exp(-0.012778 * t) - //di(t)/dt or slope of i(t) curve
        0.1932605 * 0.2989558 * Math.exp(-0.1932605 * t);
      dt = (c - i * v) / (dc - di * v); //predicted correction
      t -= dt; //new t value to try
      n++; //times through loop
    } while (n < 10 && e > 0.1); //test for convergence

    h = Math.floor(t / 60); //whole hours
    m = Math.floor(t % 60); //whole minutes
    s = Math.round(60 * (t - Math.floor(t))); //nearest whole seconds

    document.tableForm.elements[3 * row + 2].value = h;
    document.tableForm.elements[3 * row + 3].value = m;
    document.tableForm.elements[3 * row + 4].value = s;
  }
}
