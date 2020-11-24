const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const createIngredientsList = ingredients.map((element) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = element;
  return itemRef;
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...createIngredientsList);
console.log(ingredientsListRef);
