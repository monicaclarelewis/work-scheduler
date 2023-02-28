$(document).ready(function () {
    // Save button function
    $('.saveBtn').on('click', function () {

        var taskInput = $(this).siblings('.task').val();
        console.log(taskInput)
        var timeKey = $(this).parent().attr('id');
        console.log(timeKey)
        // save in local storage
        localStorage.setItem(timeKey, taskInput);
    });
    //Todays date
    var today = moment();
    $("#currentDay").text(today.format("dddd D MMMM YYYY"));

    //Changing the task colour with current time
    var checkTime = function () {

        //Current time
        var currentTime = moment().format('HH');

        //Select tasks using the ID
        var timeBlockElements = $(".task");

        //Loop for each task to determine time + new class to be applied
        for (var i = 0 ; i < timeBlockElements.length ; i++) {

            var elementID = timeBlockElements[i].id;

            var taskID = document.getElementById(timeBlockElements[i].id)

            $(timeBlockElements[i].id).removeClass(".present .past .future");

            // apply new class if task is present/past/future
            if (elementID < currentTime) {
                $(taskID).addClass("past");
            } else if (elementID > currentTime) {
                $(taskID).addClass("future");
            } else {
                $(taskID).addClass("present");
            }
        }
    }

    // checkTime every 5 minutes
    setInterval(checkTime(), (1000 * 60) * 5);
    
    // Get item from local storage
    $('#hourNine .task').val(localStorage.getItem('hourNine'));
    $('#hourTen .task').val(localStorage.getItem('hourTen'));
    $('#hourEleven .task').val(localStorage.getItem('hourEleven'));
    $('#hourTwelve .task').val(localStorage.getItem('hourTwelve'));
    $('#hourThirteen .task').val(localStorage.getItem('hourThirteen'));
    $('#hourFourteen .task').val(localStorage.getItem('hourFourteen'));
    $('#hourFifteen .task').val(localStorage.getItem('hourFifteen'));
    $('#hourSixteen .task').val(localStorage.getItem('hourSixteen'));
    $('#hourSeventeen .task').val(localStorage.getItem('hourSeventeen'));
})
