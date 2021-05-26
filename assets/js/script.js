// Variasbles //
var timeDuty = [
    { time: "time0900", input: "" },
    { time: "time1000", input: "" },
    { time: "time1100", input: "" },
    { time: "time1200", input: "" },
    { time: "time0100", input: "" },
    { time: "time0200", input: "" },
    { time: "time0300", input: "" },
    { time: "time0400", input: "" },
    { time: "time0500", input: "" },
]

// Selectors //
var saveBtn = $("#saveBtn");
var tableRow = $("tr");
  
  
  
currentDay = setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A, dddd'));
}, 1000);
  
console.log($('#currentDay'));

// Creating text input //
tableRow.on("click", ".content", function (){
    var inputText = $("<input type ='text'>"); //
    $(this).children().replaceWith(inputText);
    inputText.trigger("focus");
})

tableRow.on("blur", "input", function (){
    inputTextValue = $(this).val();
    var empty = $("<p class='p-content'>"); //
    $(this).replaceWith(empty);
})

// Save Button 
tableRow.on("click", saveBtn, function (){
    $("body").find("input").val();
    console.log($("body").find("input").val())

    var timeIndex = tableRow.parent().parent().children().attr("class").replace(" workHour", "");
    findArray(timeIndex);
    setLS();
})

console.log($("body").find("input").val());

function findArray(time) {
    if(timeDuty === undefined){
        return;
    } else {
        for (var i = 0; i < timeDuty.length; i++){
            if (timeDuty[i]["time"] === time){
                timeDuty[i]["input"] = inputTextValue;
            }
        }
    }
}

function savedSched(){
    if (timeDuty === undefined){
        return;
    } else {
        for (var i = 0; i < timeDuty.length; i++){
            var hour = timeDuty[i]["time"];
            var hourTest = '.' + hour;
            var input = timeDuty[i]["input"];

            selector = $(hourTest).find(".p-content");
            selector.text(input);
        }
    }
}


// Local Storage
function setLS() {
    localStorage.setItem("timeDuty", JSON.stringify(tasks));
}

function getLocalStorage() {
    time = JSON.parse(localStorage.getItem("timeDuty"));
}

getLocalStorage();
savedSched();