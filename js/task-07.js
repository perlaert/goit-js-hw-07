const inputRef = document.querySelector("#font-size-control");
// console.dir(inputRef);
// console.log(inputRef.value);

const textRef = document.querySelector("#text");
// console.dir(textRef);

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  textRef.style.fontSize = inputRef.value + "px";
}
