$(document).ready(function () {
  console.log("this is working!");

  // DOM Variable

  var hour = $(".hour");
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn");
  var currentDay = $("#currentDay");
  var past = $(".past");
  var present = $(".present");
  var future = $(".future");

  // JS Variable
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
  var time = moment().format("dddd, MMMM Do, YYYY");
  var currentHour = moment().format("H");
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // // Funtion Definitions

  for (var i = 0; i < workHours.length; i++) {
    // var hoursOfDay = $("<p>");

    // hoursOfDay.attr("data-value", workHours[i]);

    // hoursOfDay.text(workHours[i]);

    // $(".hour").append(hoursOfDay);
    // console.log(hoursOfDay);

    const html = `<div class="row present">
    <div class="hour">${workHours[i]}</div>
    <div class="time-block textarea"></div>
    <div class="saveBtn"></div>
  </div>`;

    // Function Calls
    $(".container").append(html);
    // Event Listener
  }
});
