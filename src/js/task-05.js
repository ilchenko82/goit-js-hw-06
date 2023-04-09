const myInput = document.querySelector('#name-input');
let myOutput = document.querySelector('#name-output');

myInput.addEventListener('input', event => {
  console.log(myInput.value);
  if (!event.currentTarget.value) {
    myOutput.textContent = 'Anonymous';
  } else myOutput.textContent = myInput.value;
});
