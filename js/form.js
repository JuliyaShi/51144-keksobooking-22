import {validationInputCapacity} from './validation.js';
import {modalErrorTemplate, modalSuccessTemplate, showModal} from './modal.js';
import {DefaultCoords, removeMainMarker, renderMainPinMarker, renderPoints} from './map.js';
import {filterForm} from './filter.js';
import {sendData} from './data.js';

export const formOffer = document.querySelector('.ad-form');
const typeOffer = formOffer.querySelector('#type');
const priceOffer = formOffer.querySelector('#price');
const timeInOffer = formOffer.querySelector('#timein');
const timeOutOffer = formOffer.querySelector('#timeout');
export const formAddress = formOffer.querySelector('#address');
const roomsNumber = formOffer.querySelector('#room_number');
const roomsCapacity = formOffer.querySelector('#capacity');
export const resetButton = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersFields = mapFilters.querySelectorAll('label, input, select');
const formFields = formOffer.querySelectorAll('label, input, select, textarea, button');

const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const onFormOfferChangePrice = () => {
  priceOffer.min = minPrice[typeOffer.value];
  priceOffer.placeholder = minPrice[typeOffer.value];
};

const onFormOfferChangeTimeOut = () => {
  timeOutOffer.value = timeInOffer.value;
};

const onFormChangeTimeIn = () => {
  timeInOffer.value = timeOutOffer.value;
};

const setDisabledField = (form, fields) => {
  form.classList.add('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = true;
  })
};

const setEnabledField = (form, fields) => {
  form.classList.remove('ad-form--disabled');
  fields.forEach((field) => {
    field.disabled = false;
  })
};

export const setInsetActiveStatePage = () => {
  setDisabledField(formOffer, formFields);
  setDisabledField(mapFilters, mapFiltersFields);
};

export const setActiveStatePage = () => {
  setEnabledField(formOffer, formFields);
  setEnabledField(mapFilters, mapFiltersFields);

};

const onSuccess = (data) => {
  showModal(modalSuccessTemplate);
  defaultFormState();
  defaultFilterFormState(data);
};

const defaultMarkerState = () => {
  formAddress.value = `${DefaultCoords.lat}, ${DefaultCoords.lng}`;
  removeMainMarker();
  renderMainPinMarker();
};

const defaultFormState = () => {
  formOffer.reset();
  defaultMarkerState();
};

const defaultFilterFormState = (data) => {
  filterForm.reset();
  renderPoints(data);
};

export const addFormInputsListeners = () => {
  roomsNumber.addEventListener('input', () => {
    validationInputCapacity(roomsNumber, roomsCapacity);
  });

  roomsCapacity.addEventListener('input', () => {
    validationInputCapacity(roomsNumber, roomsCapacity);
  });

  formOffer.addEventListener('change', () => {
    onFormOfferChangePrice();
    onFormOfferChangeTimeOut();
    onFormChangeTimeIn();
    validationInputCapacity(roomsNumber, roomsCapacity);
  });

  typeOffer.addEventListener('input', onFormOfferChangePrice);
  timeInOffer.addEventListener('input', onFormOfferChangeTimeOut);
  timeOutOffer.addEventListener('input', onFormChangeTimeIn);
};

export const addResetButtonListener = (data) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    defaultFormState();
    defaultFilterFormState(data);
  })
};

export const setUserFormSubmit = (data) => {
  formOffer.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(data),
      () => showModal(modalErrorTemplate),
      new FormData(evt.target),
    );
  })
};
