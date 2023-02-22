import React from "react";
import closeIcon from "../images/Close-Icon.svg";

function PopupWithForm({ isOpen, onClose, name, title, buttonName, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_active"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          action="#"
          name="popup-form-profile"
          noValidate
        >
          {children}
          <button type="submit" className="button popup__submit-button">
            {buttonName}
          </button>
        </form>
        <button
          type="button"
          className="button popup__close-button popup__close-button_type_profile"
          onClick={onClose}
        >
          <img
            className="popup__close-button-image"
            src={closeIcon}
            alt="Кнопка крестик"
          />
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
