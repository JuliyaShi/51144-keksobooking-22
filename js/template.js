import {getApartmentType} from'./utils.js';
import './data.js';
import {author,offer,createObjs} from './data.js';



//шаблон #card
const cardTemplate = document.querySelector('#card').content.querySelector('article.popup');



//Импортируем модуль для генерации данных, чтобы получить массив
const testCardTemplate = createObjs();

//Вставлять элементы будем через DocumentFragment
const testCardFragment = document.createDocumentFragment();



//Отрисуем всё ещё шаблон, но уже в проходке по массиву с данными
testCardTemplate.forEach(() => {
  //клонируем шаблон
  const card = cardTemplate.cloneNode(true);
  //вставляем данные в шаблон
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = getApartmentType;
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms}`+' комнаты для ' + `${offer.guests}`;
  card.querySelector('.popup__text--time').textContent = 'Заезд после '+ `${offer.checkin}`+',' + ' выезд до ' +`${offer.checkout}`;
  card.querySelector('.popup__features').textContent = offer.features;
  card.querySelector('.popup__description').textContent = offer.description;
  card.querySelector('.popup__photos').src = offer.photos;
  card.querySelector('.popup__avatar').src = author.avatar;

  testCardFragment.appendChild(card);
});


//отрисовка testCardTemplate в map-canvas
const canvas = document.querySelector('.map-canvas');

const template = (elementsNumber) => {
  canvas.appendChild(testCardFragment.children[elementsNumber]);
};
template(0);
export {template};
