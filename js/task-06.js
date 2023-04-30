const inputTextEl = document.getElementById("validation-input");

inputTextEl.addEventListener("blur", () => {
if (inputTextEl.value.length === 6) {
    inputTextEl.classList.add("valid");
    inputTextEl.classList.remove("invalid");
} else {
    inputTextEl.classList.add("invalid");
    inputTextEl.classList.remove("valid");
}
})