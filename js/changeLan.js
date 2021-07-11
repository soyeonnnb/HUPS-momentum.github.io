const langBtn = document.querySelector(".clock-changeLan");
const askNameInput = greeting.querySelector("input");

function changeLan(event) {
  event.preventDefault();

  const savedUserName = localStorage.getItem(USERNAME_KEY);
  if (lang === "KOR") {
    lang = "ENG";
    toDoInput.placeholder = "Write a To Do and Press";
    showGreetingText.innerText = `Hello ${savedUserName}`;
    askNameInput.placeholder = "What is your name?";
  } else {
    lang = "KOR";
    toDoInput.placeholder = "할 일을 입력해주세요";
    askNameInput.placeholder = "이름을 입력해주세요";
    showGreetingText.innerText = `안녕하세요 ${savedUserName}`;
  }
  getTime();
}

langBtn.addEventListener("click", changeLan);
