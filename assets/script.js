$(document).ready(function () {
    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
  


    //grabs hour from each time slot and compares it to actual time
    $(".timeblock").each(function () {
      const timeBlock = parseInt($(this).attr("id").split("-")[1]);
      
      if (currentHour == timeBlock) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }});
  
    //grabs values from time and value Blocks and saves them to local storage
    $(".saveBtn").click(function (event) {
      event.preventDefault(); 
      const value = $(this).siblings(".description").val();
      const time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
      console.log("Time:", time);
      console.log("Value:", value);

    });

  
    //retrieves items from local storage and sets them in proper places
    $("#hour-09 .descrition").val(localStorage.getItem("09"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));

  });