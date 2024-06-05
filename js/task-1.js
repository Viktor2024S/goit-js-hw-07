const categoryList = document.querySelector("#categories");

const categoryItems = categoryList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryElements = item.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
