// Variasbles //
var timeDuty = [
    { time: "time0900", input: "" },
    { time: "time1000", input: "" },
    { time: "time1100", input: "" },
    { time: "time1200", input: "" },
    { time: "time1300", input: "" },
    { time: "time1400", input: "" },
    { time: "time1500", input: "" },
    { time: "time1600", input: "" },
    { time: "time1700", input: "" },
]
var timeSet = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var timeSet2 = ["9:00", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
var timeSet3 = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
var currentHour = moment().format("H");

// Selectors //
var saveBtn = $(".saveBtn");
var tableRow = $("tr");
  
  
currentDay = setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A, dddd'));
}, 1000);


// Creating text input //
tableRow.on("click", ".content", function (){
    var inputText = $("<input class='p-content' input type ='text'>"); //
    $(this).children().replaceWith(inputText);
    inputText.trigger("focus");
})

tableRow.on("blur", "input", function (){
    inputTextValue = $(this).val();
    var empty = $("<p class='p-content'>").append(inputTextValue); //
    $(this).replaceWith(empty);
})

// Save Button 
tableRow.on("click", saveBtn, function (){
    var userInput = $(this).find(".p-content").text();
    // console.log($(this).find(".workHour").attr("class").split(" ")[0])
    // console.log(userInput);
    var timeIndex = $(this).find(".workHour").attr("class").split(" ")[0]
    findArray(timeIndex, userInput);
    setLS(userInput);
})


function findArray(time, userInput) {
    if (timeDuty === undefined){
        return;
    } else {
        for (var i = 0; i < timeDuty.length; i++){
            if (timeDuty[i]["time"] === time){
                timeDuty[i]["input"] = userInput;
            }
        }
        // console.log(timeDuty)
    }
}


function savedSched(){
    if (timeDuty === undefined || null){
        return;
    } else {
        for (var i = 0; i < timeDuty.length; i++){
            var hour = timeDuty[i]["time"];
            var hourTest = '.' + hour;
            var input = timeDuty[i]["input"];

            var savedInput = $(hourTest).find(".p-content");
            savedInput.text(input);
        }
    }
}

function timeColorCode(time){
    return moment().isAfter(moment(time, "h:mm A"));
}

// Functin to change color by time
function timeCheck() {
    if (timeDuty === undefined || null){
        return;
    } else {
        for (var i = 0; i < timeDuty.length; i++) {
            if (timeColorCode(timeSet2[i]) === true){
                selector = ".time" + timeSet3[i];
                $(selector).parent().css({ "background-color": "grey" });
            } else if (timeColorCode(timeSet2[i]) === false){
                selector = ".time" + timeSet3[i];
                $(selector).parent().css({ "background-color": "lightblue" });
            }
        }
        for (var i = 0;i < timeDuty.length; i++){
            if (currentHour === timeSet[i]){
                selector = ".time" + timeSet3[i];
                $(selector).parent().css({ "background-color": "green" });
            }
        }
    }
}


// Local Storage
function setLS(input) {
    localStorage.setItem("timeDuty", JSON.stringify(timeDuty));
}

function getLS() {
    // console.log(localStorage.getItem("timeDuty"))
    if (localStorage.getItem("timeDuty") === undefined || null){
        return;
    } else {
        timeDuty = JSON.parse(localStorage.getItem("timeDuty"));
        console.log(timeDuty)
    }
}

getLS();
savedSched();
timeCheck();

setInterval(function (){
    timeCheck();
}, 1000)