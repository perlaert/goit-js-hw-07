const inputRef = document.querySelector("#controls > input");
const renderBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const boxesRef = document.querySelector("#boxes");

renderBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  let newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = randColor();
    newBoxes.push(div);
  }
  boxesRef.append(...newBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = 0;
}

function randColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}
