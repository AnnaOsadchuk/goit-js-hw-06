const items = document.querySelectorAll(".item");
const itemsCount = items.length;

console.log(`Number of categories: ${itemsCount}`);

items.forEach( (item) => {
    const h2Text = item.firstElementChild.textContent;
    const liCount = item.querySelectorAll("li").length;
    console.log(`Category: ${h2Text}`);
    console.log(`Elements: ${liCount}`);
});
