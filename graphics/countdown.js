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

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
