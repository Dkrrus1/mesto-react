import React, { useEffect } from "react"
import { api } from "../utils/Api";

export function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    // const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getUserData()
            .then(({ name, about, avatar }) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            });
        // Promise.all([api.getUserData(), api.getInitialCards()])
        //     .then(([userData, cardsData]) => {
        //         cardsData.reverse();
        //         setUserName(userData.name);
        //         setUserDescription(userData.about);
        //         setUserAvatar(userData.avatar);
        //         // setCards(cardsData);
        //     })
        //     .catch((err) => {
        //         console.log(`Ошибка ${err}`);
        //     });
    })

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-container">
                    <img src={`${userAvatar}`} alt="Аватар профиля" className="profile__image" />
                    <button type="button" className="profile__button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" aria-label="Добавить фото" onClick={onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__grid">
                </ul>
            </section>
        </main>
    )
}