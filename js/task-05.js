const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  event.target.value !== "" ? (nameLabelRef.textContent = event.target.value) : (nameLabelRef.textContent = "незнакомец");
});
