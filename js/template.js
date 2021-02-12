import './utils.js';
import './data.js';
import { createObj } from './data.js';
//шаблон #card



const cardTemplate = document.querySelector('template').content.querySelector('article.popup');

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
cardCapacity.textContent = `${offer.rooms}`+' комнаты для ' + `${offer.guests}`;
cardTime.textContent = 'Заезд после '+ `${offer.checkin}`+',' + ' выезд до ' +`${offer.checkout}`;
cardFeatures.textContent = offer.features;
cardDescription.textContent = offer.description;
cardPhotos.src = offer.photos;
userAvatar.src = author.avatar;

const testCardTemplate = createObj();
