function getRandomNumber(min, max) {
	if (min<max && min>0) {
    return Math.floor(Math.random() * (max + 1 - min) + min);

	  } else {

 return "The min should be lower than max";
	  }


} //solution from https://learn.javascript.ru/number



getRandomNumber(5,8);
