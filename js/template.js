import './utils.js';
import './data.js';
import {author,offer,createObj} from './data.js';



//шаблон #card
const cardTemplate = document.querySelector('#card').content.querySelector('article.popup');

const card = cardTemplate.cloneNode(true);
const cardElement = card.cloneNode(true);


const cardTitle = card.querySelector('.popup__title');
const cardAddress = card.querySelector('.popup__text--address');
const cardPrice = card.querySelector('.popup__text--price');
const cardType = card.querySelector('.popup__type');
const cardCapacity = card.querySelector('.popup__text--capacity');
const cardTime = card.querySelector('.popup__text--time');
const cardFeatures = card.querySelector('.popup__features');
const cardDescription = card.querySelector('.popup__description');
const cardPhotos = card.querySelector('.popup__photos');
const userAvatar = card.querySelector('.popup__avatar');


cardTitle.textContent = offer.title;
cardAddress.textContent = offer.address;
cardPrice.textContent = `${offer.price} ₽/ночь`;
cardType.textContent = offer.type;

if (offer.type==='flat'){
  cardTitle.textContent='Квартира';

} else if (offer.type==='bungalow'){
  cardTitle.textContent='Бунгало';

}else if (offer.type==='house'){
  cardTitle.textContent='Дом';

}else if (offer.type==='palace'){
  cardTitle.textContent='Дворец';

}
cardCapacity.textContent = `${offer.rooms}`+' комнаты для ' + `${offer.guests}`;
cardTime.textContent = 'Заезд после '+ `${offer.checkin}`+',' + ' выезд до ' +`${offer.checkout}`;
cardFeatures.textContent = offer.features;
cardDescription.textContent = offer.description;
cardPhotos.src = offer.photos;
userAvatar.src = author.avatar;


const testCardTemplate = createObj();

const testCardFragment = document.createDocumentFragment();


cardElement.appendChild(testCardFragment);

//отрисовка testCardTemplate в map-canvas
const canvas = document.querySelector('.map-canvas');
canvas.appendChild(testCardTemplate);
