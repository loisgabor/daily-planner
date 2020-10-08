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

  // // Function Definitions

  for (var i = 0; i < workHours.length; i++) {
    // const html = `<div data-hour=${workHours[i]}class="row hour-block past future present">
    //   <div data-hour=${workHours[i]}class="hour">${workHours[i]}</div>
    //   <div class="time-block textarea"></div>
    //   <div class="saveBtn"></div>
    // </div>`;
    let timeString = "";
    if (workHours[i] < 12) {
      timeString = `${workHours[i]}:00 AM`;
    } else if (workHours[i] == 12) {
      timeString = `${workHours[i]}:00 PM`;
    } else {
      timeString = `${workHours[i] % 12}:00 PM`;
    }
    const html = `<div class="row">
      <div class="hour col-2">${timeString}</div>
      <div data-value="${workHours[i]}" class="time-block"></div>
      <textarea class="textarea col-8">${
        localStorage.getItem(timeString) || ""
      }</textarea>
      <div class="saveBtn ml-auto col-1"> Save</div>
    </div>`;

    // Function Calls
    $(".container").append(html);

    // Event Listener
  }

  $(".saveBtn").on("click", function () {
    const value = $(this).siblings(".textarea").val();
    const hour = $(this).siblings(".hour").text();
    localStorage.setItem(hour, value);
    // if ((localStorage.value = "")) {
    //   return "";
    // }
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
  checkTime();
});
