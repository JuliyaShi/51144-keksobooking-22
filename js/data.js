
import {getRandomInt,getRandomFloat,getRandomArrayElement,createArr} from './utils.js';

const TYPE = ['palace', 'flat' , 'house' , 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];



const countOfArrays = 10;

//объект — описывает автора
const author = {
  avatar: `img/avatars/user${String(getRandomInt(1,8)).padStart(2,0)}.png`,
}

//объект — содержит информацию об объявлении
const offer = {
  title: 'avaible',
  address: '{{location.x}}, {{location.y}}',
  price: getRandomFloat(1, 6),
  type: getRandomArrayElement(TYPE),
  rooms: getRandomInt(1, 6),
  guests: getRandomInt(1, 6),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: createArr(FEATURES,FEATURES.length),
  description: 'avaible',
  photos:createArr(PHOTOS,PHOTOS.length),
}

//объект — местоположение в виде географических координат
const location = {
  x: getRandomFloat(35.65000, 35.70000),
  y: getRandomFloat(139.70000, 139.80000),

}
//creating an random object
const createObj = () => {
  return {

    author: author.avatar ,

    offer: {

      title: 'avaible',
      address: '{{location.x}}, {{location.y}}',
      price: getRandomFloat(1,100),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1,100),
      guests: getRandomInt(1,100),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createArr(FEATURES,FEATURES.length),
      description: 'avaible',
      photos:createArr(PHOTOS,PHOTOS.length),
    },

    location:  {
      x: getRandomFloat(35.65000, 35.70000),
      y: getRandomFloat(139.70000, 139.80000),

    },

  };
}

const tenArrays = new Array(countOfArrays).fill(null).map(() => createObj()) //creating array of 10 objs

alert(tenArrays);
alert(offer);
alert(location);



export {TYPE,CHECKIN,CHECKOUT,FEATURES,PHOTOS,countOfArrays,createObj};
