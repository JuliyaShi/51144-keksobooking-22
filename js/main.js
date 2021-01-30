//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//source https://learn.javascript.ru/task/random-int-min-max
function getRandomInt(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  if (min<max && min>0) {
    return Math.round(rand);
  } else if (min<0) {
 return "The min should greater be lower than zero";
    } else {
      return "The min should be lower than max";
    }

}
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
//source https://myrusakov.ru/js-random-numbers.html

function getRandomFloat(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  if (min<max && min>0) {
    return Math.random() * (max - min) + min;
  } else if (min<0) {
 return "The min should greater be lower than zero";
    } else {
      return "The min should be lower than max";
    }

}




