export function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-container">
                    <img src="#" alt="Аватар профиля" className="profile__image" />
                    <button type="button" className="profile__button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
                    <p className="profile__profession"></p>
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