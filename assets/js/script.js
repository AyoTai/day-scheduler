// Variasbles //
var time = [
    "time0900",
    "time1000",
    "time1100",
    "time1200",
    "time0100",
    "time0200",
    "time0300",
    "time0400",
    "time0500"
]

currentTime = setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
}, 1000);

console.log(currentTime);

