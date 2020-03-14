'use strict';

var popup = document.querySelector('.popup');
var popupForm = popup.querySelector('.popup__form');

var openBtn = document.querySelector('.contacts__address-form-btn');
var closeBtn = popup.querySelector('.popup__form-close-cross');

var nameInput = popup.querySelector('#popup__form-input-name');
var emailInput = popup.querySelector('#popup__form-input-email');


// Открытие и закрытие попапа

function openBtnClickHandler () {
  popup.classList.add('popup-open');
  nameInput.focus();
};

function closeBtnClickHandler () {
  popup.classList.remove('popup-open');
  popupForm.reset();
  emailInput.classList.remove('popup__form-input_error');
  popup.classList.remove('popup__form-input_error-shake');
  emailInput.removeEventListener('input', checkEmail);
};

openBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openBtnClickHandler();
});

closeBtn.addEventListener('click', closeBtnClickHandler);

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closeBtnClickHandler();
  }
});


// Валидация формы попапа

function checkEmail () {
  if (emailInput.value !== '' && emailInput.value.match(/@/) === null) {
    emailInput.setCustomValidity('Email должен содержать @');
    emailInput.classList.add('popup__form-input_error');
    popup.classList.add('popup__form-input_error-shake');
  } else {
    emailInput.setCustomValidity('');
    emailInput.classList.remove('popup__form-input_error');
  }
}

emailInput.addEventListener('blur', function () {
  checkEmail();
  emailInput.addEventListener('input', checkEmail);
});
