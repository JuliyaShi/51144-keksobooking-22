const URL_DATA= {
  GET: 'https://22.javascript.pages.academy/keksobooking/data',
  POST: 'https://22.javascript.pages.academy/keksobooking',
};

export const offerTypes = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
};

export const fetchData = async () => {
  return fetch(URL_DATA.GET)
    .then((response) => response.json());
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    URL_DATA.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      (response.ok) ? onSuccess() : onFail();
    })
    .catch(() => onFail());
};
