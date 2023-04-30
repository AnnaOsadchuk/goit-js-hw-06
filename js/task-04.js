let counterValue = 0;

const counterEl = document.getElementById("counter");
const btnDecrement = counterEl.firstElementChild;
const btnIncrement = counterEl.lastElementChild;
const spanEl = document.getElementById("value");

const updateSpanValue = () => {
  spanEl.textContent = counterValue;
  console.log(counterValue);
};

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  updateSpanValue();
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  updateSpanValue();
});
