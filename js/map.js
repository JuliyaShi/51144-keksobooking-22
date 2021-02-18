import {activeStatePage, formAddress} from './forminput.js';
import {createObjs} from './data.js';
import {template} from './template.js';

const LATITUDE_TOKYO = 35.652832;
const LONGITUDE_TOKYO = 139.839478;
const MAP_SCALE = 10;
const MAIN_PIN_ICON_SIZE = [52, 52];
const MAIN_PIN_ICON_ANCHOR = [26, 52];
const MAIN_PIN_ICON_IMAGE = '../img/main-pin.svg';
const PIN_ICON_SIZE = [40, 40];
const PIN_ICON_ANCHOR = [20, 40];
const PIN_ICON_IMAGE = '../img/pin.svg';
const DIGITS_AFTER_POINT = 5;

const DefaultPoints = {
  X: LATITUDE_TOKYO.toFixed(DIGITS_AFTER_POINT),
  Y: LONGITUDE_TOKYO.toFixed(DIGITS_AFTER_POINT),
};

//инициализируем карту
/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    activeStatePage();
    formAddress.value =`${DefaultPoints.X}, ${DefaultPoints.Y}`;
  })
  .setView({
    lat: DefaultPoints.X,
    lng: DefaultPoints.Y,
  }, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//добавим «главную» метку
const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_ICON_IMAGE,
  iconSize: MAIN_PIN_ICON_SIZE,
  iconAnchor: MAIN_PIN_ICON_ANCHOR,
});

//добавим метки
const mainPinMarker = L.marker(
  {
    lat: LATITUDE_TOKYO,
    lng: LONGITUDE_TOKYO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  formAddress.value =
    `${evt.target.getLatLng().lat.toFixed(DIGITS_AFTER_POINT)}, ${evt.target.getLatLng().lng.toFixed(DIGITS_AFTER_POINT)}`;
});

mainPinMarker.remove();

createObjs.forEach((point) => {
  const {location} = point;

  const icon = L.icon({
    iconUrl: PIN_ICON_IMAGE,
    iconSize: PIN_ICON_SIZE,
    iconAnchor: PIN_ICON_ANCHOR,
  });

  const marker = L.marker(
    {
      lat: location.x,
      lng: location.y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      template(point),
      {
        keepInView: true,
      },
    );
});
