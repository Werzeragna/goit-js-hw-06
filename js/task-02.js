const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const setIngredientsOption = (options) => {
  return options.map((option) => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.textContent = option;
    ingredientItemEl.classList.add("item");
    return ingredientItemEl;
  });
};
const elements = setIngredientsOption(ingredients);
listEl.append(...elements);
