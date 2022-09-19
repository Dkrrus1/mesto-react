import React from "react"
import { Card } from "./Card"

export function Main({ onEditProfile, onAddPlace, onEditAvatar, userInfo, cards }) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-container">
                    <img src={`${userInfo.avatar}`} alt="Аватар профиля" className="profile__image" />
                    <button type="button" className="profile__button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userInfo.name}</h1>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__profession">{userInfo.about}</p>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить фото" onClick={onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__grid">
                    {cards.map((card) => <Card key={card._id} card={card} />)}
                </ul>
            </section>
        </main>
    )
}