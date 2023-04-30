const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener("keyup", () => {
  spanEl.textContent = inputEl.value.length > 0 ? inputEl.value : "Anonymous";
});


