fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Проверка — открой DevTools (F12) и глянь в консоль
  });