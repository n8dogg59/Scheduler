


$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));

    var currentHour = moment().format("HH");
    console.log("current hour is " + currentHour);

    var hourArr = $("input")
    for (var i = 0; i < hourArr.length; i++) {
        var timeId = $(hourArr[i]).attr("id");

        if (currentHour > timeId) {
            $(hourArr[i]).addClass("bg-secondary")
        }
        else if (currentHour === timeId) {
            $(hourArr[i]).addClass("bg-danger")
        }         
    }

    $(".saveBtn").on("click", function() {
        console.log($(this).siblings(".col-10").val());
        var timeSave = $(this).siblings("input").attr("id");
        console.log(timeSave);
        var taskSave = $(this).siblings(".col-10").val();
        console.log(taskSave);
        localStorage.setItem(timeSave, taskSave)
    })

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

