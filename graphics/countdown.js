const dateReplicant = nodecg.Replicant("countdownDate");
const labelReplicant = nodecg.Replicant("countdownLabel");
var countDownDate;

dateReplicant.on("change", (value) => {
  countDownDate = value;
  //console.log(countDownDate);
});
labelReplicant.on("change", (value) => {
  document.getElementById("label").innerHTML = value;
});
function toPositive(pNumber) {
  if (pNumber < 0) {
    return pNumber.toString().substring(1);
  } else {
    return pNumber;
  }
}
function addZero(pNumber) {
  var number = toPositive(pNumber);
  if (number.toString().length == 1) {
    number = "0" + number;
  }
  return number;
}

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var sign;
  if (seconds >= 0) {
    sign = "-";
  } else {
    sign = "+";
  }

  // Display the result in the element with id="demo"
  document.getElementById("countdown+-").innerHTML = sign;
  if (days != 0) {
    document.getElementById("countdownD").innerHTML = toPositive(days);
    document.getElementById("D").innerHTML = "D";
  } else {
    document.getElementById("D").innerHTML = "";
    document.getElementById("countdownD").innerHTML = "";
  }
  document.getElementById("countdownH").innerHTML = addZero(hours);
  document.getElementById("countdownM").innerHTML = addZero(minutes);
  document.getElementById("countdownS").innerHTML = addZero(seconds);
}, 1000);
