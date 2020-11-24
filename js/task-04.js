let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const currentValue = document.querySelector("span");
// console.log(currentValue);

const decrement = () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

// console.log(currentValue);
