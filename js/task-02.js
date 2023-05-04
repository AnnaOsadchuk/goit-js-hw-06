const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");

const liEls = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});

// const liEls = [];
// for (const ingredient of ingredients) {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item");
//   liEl.textContent = ingredient;
//   liEls.push(liEl);
// }
console.log(liEls);
ulEl.append(...liEls);
