const clock = document.querySelector("#clock");
const clockPresent = clock.querySelector("h1");
const clockDay = clock.querySelector("h3");

const dayListKor = ["일", "월", "화", "수", "목", "금", "토"];
const dayListEng = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
const monthListEng = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let lang = "ENG";

function paintDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dates = date.getDate();
  const day = date.getDay();
  if (lang === "KOR") {
    clockDay.innerText = `${year}년 ${String(month + 1).padStart(
      2,
      "0"
    )}월 ${String(dates).padStart(2, "0")}일 ${dayListKor[day]}요일`;
  } else {
    clockDay.innerText = `${year} ${monthListEng[month]} ${String(
      dates
    ).padStart(2, "0")} ${dayListEng[day]}day`;
  }
}

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  clockPresent.innerText = `${String(hour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  paintDate(date);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
