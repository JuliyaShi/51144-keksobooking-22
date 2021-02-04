//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//source https://learn.javascript.ru/task/random-int-min-max

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
alert( getRandomInt(1, 8) );
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
alert( getRandomFloat(1, 3.008) );

const TYPE = ['palace', 'flat' , 'house' , 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

//Функция, возвращающая случайный элемент в переданном массиве.
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elemets.length - 1)];
  };

const author= {
avatar: img/avatars/user{{'0'+ getRandomInt(1, 8)}}.png;
};

const offer= {
title: 'avaible',
address: {{location.x}}, {{location.y}},
price: Math(abs),
type: getRandomArrayElement(TYPE),
rooms: Math(abs),
guests: Math(abs),
checkin: getRandomArrayElement(CHECKIN),
checkout: getRandomArrayElement(CHECKOUT),
features: getRandomArrayElement(FEATURES),
description: 'avaible',
photos: [http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg]
}


const location = {
{x: getRandomFloat(35.65000, 35.70000)},
{y: getRandomFloat(139.70000, 139.80000)}
}


const countOfArrays= 10;


//creating an random object
const createObj = () => {
return {
author: ,
offer: ,
location:

};

}

const tenArrays = new Array(countOfArrays).fill(null).map(() => createObj());//creating array of 10 objs
