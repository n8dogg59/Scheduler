$(document).ready(function() {
    // display the current day in the format required
    $("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));

    // get the current hour so that we can use this number to change the task descriptions background color
    var currentHour = moment().format("HH");
    console.log("current hour is " + currentHour);

    // creates an array for the input elements and stores them in variable hourArr
    var hourArr = $("input")

    // for loop that checks the current time again the hour row and sets the color accordingly
    for (var i = 0; i < hourArr.length; i++) {
        var timeId = $(hourArr[i]).attr("id");

        if (currentHour > timeId) {
            $(hourArr[i]).addClass("bg-secondary text-light")
        }
        else if (currentHour === timeId) {
            $(hourArr[i]).addClass("bg-danger")
        }         
    }

    // function funs every second to see if the hour has changed to set the background color
    var checkTime = setInterval(function() {
        for (var i = 0; i < hourArr.length; i++) {
            var timeId = $(hourArr[i]).attr("id");

            if (currentHour > timeId) {
                $(hourArr[i]).addClass("bg-secondary text-light")
            }
            else if (currentHour === timeId) {
                $(hourArr[i]).addClass("bg-danger")
            }         
        }
    }, 1000);

    // when save button is clicked this function sends the key and value to local storage
    $(".saveBtn").on("click", function() {
        console.log($(this).siblings(".col-10").val());
        var timeSave = $(this).siblings("input").attr("id");
        console.log(timeSave);
        var taskSave = $(this).siblings(".col-10").val();
        console.log(taskSave);
        localStorage.setItem(timeSave, taskSave)
    })

    // when page is reloaded all the task descriptions in local storage get loaded
    $("#09").val(localStorage.getItem("09"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
});

