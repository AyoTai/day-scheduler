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
  
// Selectors //
var saveBtn = $("#saveBtn");
var tableRow = $("tr");
  
  
  
currentTime = setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A, dddd'));
}, 1000);
  
console.log($('#currentDay'));

// Creating text input //
tableRow.on("click", ".content", function (){
    var inputText = $("<input type ='text'>");
    $(this).children().replaceWith(inputText);
    inputText.trigger("focus");
})

// Save Button 
tableRow.on("click", saveBtn, function (){
    $("body").find("input").val();
    console.log($("body").find("input").val())
})

console.log($("body").find("input").val());


// Local Storage
function setLS() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getLocalStorage() {
    time = JSON.parse(localStorage.getItem("tasks"));
}