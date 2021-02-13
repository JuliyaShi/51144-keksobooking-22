
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

//Функция, возвращающая массив случайной длины из значений
const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);

export {getRandomInt,getRandomFloat,getRandomArrayElement,createArr};