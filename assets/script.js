$(document).ready(function () {
  console.log("this is working!");

  // DOM Variable

  var hour = $(".hour");
  var timeBlock = $(".time-block");
  var saveBtn = $(".saveBtn");
  var currentDay = $("#currentDay");
  // var textArea = $(".textarea");
  var past = $(".past");
  var present = $(".present");
  var future = $(".future");
  // JS Variable
  var time = moment().format("dddd, MMMM Do, YYYY");

  // $(".hours") = moment();
  // console.log(hours);
  // Funtion Definitions
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
  // Function Calls

  // Event Listener
});
