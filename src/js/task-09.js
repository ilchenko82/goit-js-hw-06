function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', function () {
  const colorText = document.querySelector('.color');
  const randomColor = getRandomHexColor();
  const bodyColor = document.querySelector('body');
  bodyColor.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change-color и выводит значение цвета в span.color.
