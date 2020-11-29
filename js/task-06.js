const inputRef = document.querySelector("#validation-input");
const validValue = Number(inputRef.dataset.length);

inputRef.addEventListener("change", handleInputBlur);

function handleInputBlur(event) {
  const currentValue = Number(inputRef.value.length);
  if (validValue === currentValue) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else if (currentValue === 0) {
    inputRef.classList.remove("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
