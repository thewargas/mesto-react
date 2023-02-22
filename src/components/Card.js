import React from "react";

function Card({ prop, onCardClick }) {
  function handleClick() {
    onCardClick(prop);
  }

  return (
    <article className="element">
      <figure className="element__container">
        <img
          className="element__image"
          src={prop.link}
          alt={prop.name}
          onClick={handleClick}
        />
        <figcaption className="element__info">
          <h2 className="element__title">{prop.name}</h2>
          <div className="element__like-container">
            <button
              type="button"
              className="button element__like-button"
            ></button>
            <p
              className="element__like-counter"
              style={{ display: prop.likes.length > 0 ? "block" : "none" }}
            >
              {prop.likes.length}
            </p>
          </div>
          <button
            type="button"
            className="button element__trash-button"
          ></button>
        </figcaption>
      </figure>
    </article>
  );
}

export default Card;
