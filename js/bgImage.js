const images = [
  "Alex_Gruber",
  "Jessica_F",
  "Jasper_Garratt",
  "Mathew_Schwartz",
  "Nelly_Volkovich",
];
const imageSpan = document.querySelector(".bgImage-name");
const image = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${image}.jpg`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);
imageSpan.innerText = `photoed by ${image}`;
