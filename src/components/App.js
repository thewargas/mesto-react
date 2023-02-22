import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);

    setSelectedCard({});
  };

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"avatar"}
        title={"Обновить аватар"}
        buttonName={"Сохранить"}
      >
        <div className="popup__inputs">
          <input
            id="url-avatar-input"
            className="popup__input popup__input_type_url-avatar"
            type="url"
            placeholder="Ссылка на аватар"
            name="avatar"
            required
          />
          <span className="popup__input-error url-avatar-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"profile"}
        title={"Редактировать профиль"}
        buttonName={"Сохранить"}
      >
        <div className="popup__inputs">
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            type="text"
            placeholder="Имя и фамилия"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            id="job-input"
            className="popup__input popup__input_type_job"
            type="text"
            placeholder="Деятельность"
            name="about"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error job-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={"card"}
        title={"Новое место"}
        buttonName={"Создать"}
      >
        <div className="popup__inputs">
          <input
            id="title-input"
            className="popup__input popup__input_type_title"
            type="text"
            placeholder="Название"
            name="title"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error title-input-error"></span>
          <input
            id="url-mesto-input"
            className="popup__input popup__input_type_url-mesto"
            type="url"
            placeholder="Ссылка на картинку"
            name="url"
            required
          />
          <span className="popup__input-error url-mesto-input-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name={"delete-card"}
        title={"Вы уверены?"}
        buttonName={"Да"}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
