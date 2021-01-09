$(document).ready(function() {
    $("#currentDay").text(moment().format('dddd MMMM Do, YYYY'));

    var currentHour = moment().format("HH");
    console.log("current hour is " + currentHour);

    var hourArr = $("input")

    for (var i = 0; i < hourArr.length; i++) {
        var timeId = $(hourArr[i]).attr("id");
        console.log(timeId);
    }
});

