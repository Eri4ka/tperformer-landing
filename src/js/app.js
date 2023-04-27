import { sendEmail } from './modules/sendEmal.js';

const headerForm = document.querySelector('#header-form');
const headerInput = document.querySelector('#email-sub');
const headerSubmitBtn = document.querySelector('.header-content__btn');

const footerForm = document.querySelector('#footer-form');
const footerInput = document.querySelector('#email-footer');
const footerSubmitBtn = document.querySelector('.footer-form__submit');

window.addEventListener('DOMContentLoaded', () => {
  sendEmail({ form: headerForm, input: headerInput, button: headerSubmitBtn });
  sendEmail({ form: footerForm, input: footerInput, button: footerSubmitBtn });
});
