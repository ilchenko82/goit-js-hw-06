let counterValue = 0;
const step = 1;

const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

btnDecr.addEventListener('click', () => {
  counterValue -= step;
  valueSpan.textContent = counterValue;

  console.log(counterValue);
  console.log(valueSpan);
});

btnIncr.addEventListener('click', () => {
  counterValue += step;
  valueSpan.textContent = counterValue;

  console.log(counterValue);
  console.log(valueSpan);
});
