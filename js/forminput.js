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
const changeTimeIn = () => {
  timeIn.value = timeOut.value;
};

const changeTimeOut = () => {
  timeIn.value = timeOut.value;
};

type.addEventListener('input', changePrice);

timeIn.addEventListener('input',changeTimeIn);
timeOut.addEventListener('input',changeTimeOut);

const mapFilters = document.querySelector('.map__filters');
const mapFiltersFilds = mapFilters.querySelectorAll('label, input, select');
const formFilds = form.querySelectorAll('label, input, select, textarea, button');

const disabledFild = (formas,filds) => {
  formas.classList.add('ad-form--disabled');
  filds.forEach((field) => {
    field.disabled = true;
  })
};


const enabledFild = (formas,filds) => {
  formas.classList.remove('ad-form--disabled');
  filds.forEach((field) => {
    field.disabled = false;
  })
};

const disactiveStatePage = () => {
  disabledFild(form, formFilds);
  disabledFild(mapFilters, mapFiltersFilds);
};

export const activeStatePage = () => {
  enabledFild(form, formFilds);
  enabledFild(mapFilters, mapFiltersFilds);
};

disactiveStatePage();

export const formAddress = form.querySelector('#address');
