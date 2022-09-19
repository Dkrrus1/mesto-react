import React, { useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { api } from "../utils/Api";
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    about: '',
    avatar: '',
  });
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState('');

  const openProfileEdit = () => { setIsEditProfilePopupOpen(true) };
  const openAvatarEdit = () => { setIsEditAvatarPopupOpen(true) };
  const openPlaceAdd = () => { setIsAddPlacePopupOpen(true) };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }
  const handleCardClick = (getCard) => {
    setSelectedCard(getCard);
  }

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        cardsData.reverse();
        setUserInfo(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={openProfileEdit} onAddPlace={openPlaceAdd} onEditAvatar={openAvatarEdit} userInfo={userInfo} cards={cards} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name={'profile-form'} title={'Редактировать профиль'} isOpened={isEditProfilePopupOpen} submitName={'Сохранить'} onClose={closeAllPopups}
        children={<>
          <input type="text" name="name" id="profile-name" className="edit-form__name popup__input" placeholder="Имя"
            minLength="2" maxLength="40" required />
          <span className="popup__input-error profile-name-error">Ошибка</span>
          <input type="text" name="about" id="profile-profession" className="edit-form__profession popup__input"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span className="popup__input-error profile-profession-error">Ошибка</span>
        </>}
      />

      <PopupWithForm name={'link-form'} title={'Новое место'} isOpened={isAddPlacePopupOpen} submitName={'Сохранить'} onClose={closeAllPopups}
        children={<>
          <input type="text" name="name" id="link-name" className="edit-form__name popup__input" placeholder="Название"
            minLength="2" maxLength="200" required />
          <span className="popup__input-error link-name-error">Ошибка</span>
          <input type="url" name="link" id="link-url" className="edit-form__profession popup__input"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-url-error">Ошибка</span>
        </>}
      />

      <PopupWithForm name={'confirm-avatar-change'} title={'Обновить аватар'} isOpened={isEditAvatarPopupOpen} submitName={'Сохранить'} onClose={closeAllPopups}
        children={<>
          <input type="text" name="name" id="link-name" className="edit-form__name popup__input" placeholder="Название"
            minLength="2" maxLength="200" required />
          <span className="popup__input-error link-name-error">Ошибка</span>
          <input type="url" name="link" id="link-url" className="edit-form__profession popup__input"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-url-error">Ошибка</span>
        </>}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <div className="popup popup_confirm-card-delete">
        <div className="popup__container">
          <button type="button" className="popup__container-close-button" aria-label="Закрыть"></button>
          <form className="edit-form" name="confirm-card-delete" method="post">
            <h3 className="edit-form__title">Вы уверены?</h3>
            <button type="submit" className="edit-form__submit" aria-label="Подтвердить удаление карточки">Да</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
