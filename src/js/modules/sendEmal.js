import { URL_APP } from '../constants/index.js';

export const sendEmail = ({ form, input, button }) => {
  const sendRequest = async (data) => {
    button.setAttribute('disabled', true);

    await fetch(URL_APP, {
      method: 'POST',
      body: new FormData(data),
    });

    button.removeAttribute('disabled');
    input.value = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    sendRequest(form);
  });
};
