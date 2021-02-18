//найдем форму заполнения информации об объявлении
const form = document.querySelector('.ad-form');

const type= form.querySelector('#type');
const price = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const title = form.querySelector('#title');
const roomsCount = form.querySelector('#room_number');
const guestsCount = form.querySelector('#capacity')

//Ограничения, накладываемые на заголовок объявления
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_NIGHT_PRICE = 1000000;



//минимальное значение поля «Цена за ночь»
const minPrice = {
  bungalow : 0,
  flat : 1000,
  house: 5000,
  palace : 10000,

};

//количество гостей и подпись к нему
const NO_GUESTS = {
  value: 100,
  text: 'не для гостей',
};

const SINGLE_GUEST = {
  value: 1,
  text: 'для 1 гостя',
};

const DOUBLE_GUESTS = {
  value: 2,
  text: 'для 2 гостей',
};

const TRIPLE_GUESTS = {
  value: 3,
  text: 'для 3 гостей',
};

const OPTIONS = {
  100: [NO_GUESTS],
  1: [SINGLE_GUEST],
  2: [DOUBLE_GUESTS, SINGLE_GUEST],
  3: [TRIPLE_GUESTS, DOUBLE_GUESTS, SINGLE_GUEST],
};

const getOptions = function (guests) {
  for (let i = 0; i < guests.length; i++) {
    const option = document.createElement('option');
    option.value = guests[i].value;
    option.innerHTML = guests[i].text;
    guestsCount.appendChild(option);
  }
};

//Поле «Количество комнат» синхронизировано с полем «Количество мест»
roomsCount.addEventListener('change', function () {
  const roomsCountValue = roomsCount.value;
  guestsCount.value = (roomsCountValue === '100') ? '0' : roomsCountValue;

  while (guestsCount.firstChild) {
    guestsCount.removeChild(guestsCount.firstChild);
  }

  getOptions(OPTIONS[roomsCountValue]);
});

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



//валидация title
title.addEventListener('input', () => {
  const valueLength = title.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    title.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    title.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
});

//валидация price
price.addEventListener('input', () => {
  const valueLength = price.value.length;

  if (valueLength > MAX_NIGHT_PRICE) {
    price.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
});




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
