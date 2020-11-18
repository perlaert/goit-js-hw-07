const categoriesList = document.querySelectorAll(".item");
console.log(`В списке ${categoriesList.length} категории.`);

categoriesList.forEach((e) => {
  const categoryTitleRef = e.querySelector("h2").textContent;
  const categoryListItemRef = e.querySelectorAll("li");

  console.log(`Категория: ${categoryTitleRef}`);
  console.log(`Количество элементов: ${categoryListItemRef.length}`);
});
