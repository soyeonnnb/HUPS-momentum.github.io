const greeting = document.querySelector("#greeting");
const greetingForm = greeting.querySelector(".askName");
const showGreeting = greeting.querySelector(".showName");
const showGreetingText = showGreeting.querySelector("h2");
const removeBtn = document.querySelector(".Btn-box button:first-child");

const USERNAME_KEY = "username";
const HIDDEN = "hidden";

function removeName(event) {
  event.preventDefault();
  console.log("clicked");
  localStorage.removeItem(USERNAME_KEY);
  greetingForm.querySelector("input").value = "";
  showGreeting.classList.add(HIDDEN);
  greetingForm.classList.remove(HIDDEN);
}

function handleGreeting(event) {
  event.preventDefault();
  const username = greetingForm.querySelector("input").value;
  console.log(username);
  paintGreeting(username);
}
function paintGreeting(username) {
  localStorage.setItem(USERNAME_KEY, username);
  init();
}
function init() {
  const savedUserName = localStorage.getItem(USERNAME_KEY);
  if (savedUserName === null) {
    showGreeting.classList.add(HIDDEN);
    greetingForm.addEventListener("submit", handleGreeting);
  } else {
    if (lang === "KOR") {
      showGreetingText.innerText = `안녕하세요 ${savedUserName}`;
    } else {
      showGreetingText.innerText = `Hello ${savedUserName}`;
    }
    greetingForm.classList.add(HIDDEN);
    showGreeting.classList.remove(HIDDEN);
  }
  greetingForm.addEventListener("submit", handleGreeting);
  removeBtn.addEventListener("click", removeName);
}
init();
