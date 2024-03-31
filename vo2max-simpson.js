function vo2maxcalculate() {
  //get the following values from the form in the HTML document

  var units =
    document.vo2max.units.options[document.vo2max.units.selectedIndex].value;
  var hrs = eval(document.vo2max.hrs.value);
  var mins = eval(document.vo2max.mins.value);
  var secs = eval(document.vo2max.secs.value);
  var dist = eval(document.vo2max.dist.value);

  if (units == "miles") {
    dist = dist * 1.609;
  }

  //convert time to mins and 100ths of mins
  th = hrs * 60;
  tm = mins * 1;
  ts = secs / 60;
  time = th + tm + ts;

  //calculate velocity im metres per min
  d = eval((dist * 1000) / time);

  //calculate % max (drop dead formula)
  p =
    0.8 +
    0.1894393 * Math.exp(-0.012778 * time) +
    0.2989558 * Math.exp(-0.1932605 * time);

  //calculate vo2 (oxygen cost)
  v = -4.6 + 0.182258 * d + 0.000104 * d * d;

  //calculate vo2 max
  vo2 = v / p;

  document.vo2max.vo2.value = vo2;
}
