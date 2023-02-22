export default class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;

    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;

    this._inputList = Array.from(
      form.querySelectorAll(validationConfig.inputSelector)
    );
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(bool) {
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    if (bool) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
    buttonElement.disabled = bool;
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._hasInvalidInput());
      });
    });
  }

  clearErrors() {
    const errors = this._form.querySelectorAll(`.${this._errorClass}`);
    errors.forEach((error) => {
      error.classList.remove(this._errorClass);
      error.textContent = "";
    });
    const borders = this._form.querySelectorAll(`.${this._inputErrorClass}`);
    borders.forEach((border) => {
      border.classList.remove(this._inputErrorClass);
    });

    this._toggleButtonState(this._hasInvalidInput());
  }

  enableValidation() {
    this._setEventListeners();
  }
}
