const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  ulList.appendChild(newItem);
});





