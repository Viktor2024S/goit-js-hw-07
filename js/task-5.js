function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const byttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColorBody = addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
});
