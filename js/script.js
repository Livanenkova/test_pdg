'use strict';
  const popup = document.querySelector('.popup');
  const open_popup = document.querySelector('.login-button__open-popup');
  const closePopupButton = document.querySelector('.close-popup__button');
  const popupWrapper= document.querySelector('.popup-wrapper');
  const test = document.getElementById('test');
  const fieldEmail = document.querySelector('.field-email');
  const fieldPass = document.querySelector('.field-pass');
  const loginButtonPopup = document.querySelector('.login-button-popup');
  const emailValidation = document.getElementById('validation-email');
  const showEmailValidation = document.querySelector('.show-email-validation');
  const passValidation = document.getElementById('validation-pass');
  const showPassValidation = document.querySelector('.show-pass-validation');
  

  open_popup.addEventListener('click', function () {
    openPopup();
  });
  closePopupButton.addEventListener('click', function () {
    closePopup();
  });

  popupWrapper.addEventListener('click', function (evt) {
    if(evt.target === this) {
        closePopup();
    }
  });

  const openPopup = function () {
    test.classList.remove("close-popup");
  };

  const closePopup = function () {
    test.classList.add("close-popup");
    
  };

  const showEmailValidationFunc = function () {
    
  };



  var popupCloseEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  document.addEventListener('keydown', function (evt) {
    popupCloseEscPress(evt);
  });

  loginButtonPopup.addEventListener('click', function (evt) {
    validationForm(evt);
  });

  var validationForm = function (evt) {
    fieldEmail.style.border = '1px solid #A2ABC0';
    fieldEmail.setCustomValidity('');
    if (fieldEmail.value.length === 0 ){
        fieldEmail.style.border = '1px solid red';
        showEmailValidation.classList.remove(`show-email-validation`);
    }
    if (fieldPass.value.length === 0 ){
        fieldPass.style.border = '1px solid red';
        showPassValidation.classList.remove('show-pass-validation');
    }
  };