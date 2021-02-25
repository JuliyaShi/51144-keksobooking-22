//Функция, возвращающая случайное целое число из переданного диапазона включительно. source https://learn.javascript.ru/task/random-int-min-max

const getRandomInt = function(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min<max && min>0) {
    return Math.round(rand);
  } else if (min<0) {
    return 'The min should greater be than zero';
  } else {
    return 'The min should be lower than max';
  }

}
//alert( getRandomInt(1, 8) );

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
//source https://myrusakov.ru/js-random-numbers.html


const getRandomFloat = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min<max && min>0) {
    return Math.random() * (max - min) + min;
  } else if (min<0) {
    return 'The min should be greater  than zero';
  } else {
    return 'The min should be lower than max';
  }

}
//alert( getRandomFloat(1, 3.008) );


//Функция, возвращающая случайный элемент в переданном массиве.
const getRandomArrayElement = (elements) => {
  return elements[getRandomInt(0, elements.length - 1)];
};

const ALERT_SHOW_TIME = 5000;
// adding alert message

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

//Функция, возвращающая массив случайной длины из значений
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

//Функция проверки типа жилья
const getApartmentType = function (element){
  if (element.offer.type==='flat'){
    return 'Квартира';

  } else if (element.offer.type==='bungalow'){
    return 'Бунгало';

  }else if (element.offer.type==='house'){
    return 'Дом';

  }else if (element.offer.type==='palace'){
    return 'Дворец';

  }
};
export {getRandomInt,getRandomFloat,getRandomArrayElement,createArr,getApartmentType, isEscEvent, isEnterEvent, showAlert};
