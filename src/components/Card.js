import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext ";

export function Card({ card, onCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    function handleClick() {
        onCardClick(card);
    }
    return (
            <div className="card">
                <img src={card.link} className="card__image" alt={card.name} onClick={handleClick} />
                <button type="button" className="card__trash-button" aria-label="Удалить карточку"></button>
                <div className="card__description">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-container">
                        <button type="button" className="card__like-button" aria-label="Поставить лайк"></button>
                        <span className="card__like-count">{card.likes.length}</span>
                    </div>
                </div>
            </div>
    )
}