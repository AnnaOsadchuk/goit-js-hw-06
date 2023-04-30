function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const bntEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

bntEl.addEventListener("click", () => { 
  const color = getRandomHexColor();
  colorEl.textContent = color;
  bodyEl.style.backgroundColor = color;
})

