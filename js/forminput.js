//найдем форму заполнения информации об объявлении
const form = document.querySelector('.ad-form');

const type= form.querySelector('#type');
const price = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

//минимальное значение поля «Цена за ночь»
const minPrice = {
  bungalow : 0,
  flat : 1000,
  house: 5000,
  palace : 10000,
};

//минимальное значение поля «Цена за ночь» в зависимости от «Тип жилья»
const changePrice = () => {
  price.min = minPrice[type.value];
  price.placeholder = minPrice[type.value];
};

//Поля «Время заезда» и «Время выезда» синхронизированы
const changeTime = (firstTime, secondTime) => {
  firstTime.value = secondTime.value;
};

type.addEventListener('input', changePrice);

timeIn.addEventListener('input',() => {
  changeTime(timeIn,timeOut);

});

timeOut.addEventListener('input',() => {
  changeTime(timeIn,timeOut);

});

