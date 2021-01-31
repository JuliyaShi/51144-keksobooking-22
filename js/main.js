//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//source https://learn.javascript.ru/task/random-int-min-max

const getRandomInt = function(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min<max && min>0) {
    return Math.round(rand);
  } else if (min<0) {
    return 'The min should greater be lower than zero';
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
    return 'The min should greater be lower than zero';
  } else {
    return 'The min should be lower than max';
  }

}
alert( getRandomFloat(1, 3.008) );



