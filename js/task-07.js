const myInput = document.getElementById('font-size-control');
const textStyle = document.getElementById('text');

myInput.addEventListener('input', () => {
  textStyle.style.fontSize = `${myInput.value}px`;
  console.log(myInput.value);
  console.log(textStyle);
});
