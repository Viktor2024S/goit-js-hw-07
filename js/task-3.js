const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  const userName = event.target.value.trim();
  outputName.textContent = userName || "Anonymous";
});
