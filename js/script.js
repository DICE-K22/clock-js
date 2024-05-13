function time() {
  const today = new Date();
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUN",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const day = days[today.getDay()];
  const hour = today.getHours().toString().padStart(2, "0");
  const minute = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const dayArea = document.querySelector(".day");
  const timeArea = document.querySelector(".hour");
  const secondsArea = document.querySelector(".seconds");
  const daysArea = document.querySelector(".days");

  dayArea.innerHTML = day;
  timeArea.innerHTML = `${hour}:${minute}`;
  secondsArea.innerHTML = seconds;
  daysArea.innerHTML = `${date} ${month} ${year}`;

  requestAnimationFrame(time);
}

requestAnimationFrame(time);
