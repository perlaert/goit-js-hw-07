const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  nameLabelRef.textContent = event.target.value !== "" ? event.target.value : "незнакомец";
});
