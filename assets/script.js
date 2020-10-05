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
    // const html = `<div data-hour=${workHours[i]}class="row hour-block past future present">
    //   <div data-hour=${workHours[i]}class="hour">${workHours[i]}</div>
    //   <div class="time-block textarea"></div>
    //   <div class="saveBtn"></div>
    // </div>`;
    let timeString = "";
    if (workHours[i] < 12) {
      timeString = `${workHours[i]} AM`;
    } else if (workHours[i] == 12) {
      timeString = `${workHours[i]} PM`;
    } else {
      timeString = `${workHours[i] % 12} PM`;
    }
    const html = `<div class="row">
      <div class="hour">${timeString}</div>
      <div data-value="${workHours[i]}" class="time-block"></div>
      <textarea class="textarea">${localStorage.getItem(timeString)}</textarea>
      <div class="saveBtn ml-auto">Save</div>
    </div>`;

    // Function Calls
    $(".container").append(html);

    // Event Listener
  }

  $(".saveBtn").on("click", function () {
    const value = $(this).siblings(".textarea").val();
    console.log(value);
    const hour = $(this).siblings(".hour").text();
    console.log(hour);
    localStorage.setItem(hour, value);
  });

  function checkTime() {
    var currentHour = moment().hours();
    // console.log($(".time-block"));
    $(".time-block").each(function (i, block) {
      var blockHour = $(this).attr("data-value");
      console.log($(this).parent());
      if (blockHour < currentHour) {
        $(this).parent().addClass("past");
        $(this).parent().removeClass("present");
        $(this).parent().removeClass("future");
      } else if (blockHour > currentHour) {
        $(this).parent().addClass("future");
        $(this).parent().removeClass("past");
        $(this).parent().removeClass("present");
      } else {
        $(this).parent().addClass("present");
        $(this).parent().removeClass("past");
        $(this).parent().removeClass("future");
      }
    });
  }
  var interval = setInterval(checkTime, 5000);
});
