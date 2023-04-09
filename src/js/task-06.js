const myInput = document.getElementById('validation-input');
const maxLength = document.querySelector('[data-length="6"]');

myInput.addEventListener('blur', event => {
  if (event.currentTarget.value.length === Number(maxLength.dataset.length)) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
});
