import React, { useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';
import { AddPlacePopup } from './AddPlacePopup';
import { api } from "../utils/Api";
import { ImagePopup } from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext ';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  const openProfileEdit = () => { setIsEditProfilePopupOpen(true) };
  const openAvatarEdit = () => { setIsEditAvatarPopupOpen(true) };
  const openPlaceAdd = () => { setIsAddPlacePopupOpen(true) };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  function handleCardLike(card, isLiked) {
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    setCards((state) => state.filter(c => c._id !== card._id))
  }

  function handleUpdateUser(data) {
    api.setUserData(data).then((newUserInfo) => { setUserInfo(newUserInfo); closeAllPopups() })
  }

  function handleAvatarUpdate(link) {
    api.setUserAvatar(link).then((newUserInfo) => { setUserInfo(newUserInfo); closeAllPopups() })
  }

  function handlePlaceAdd (card) {
    api.addNewPicture(card).then((newCard) => {setCards([newCard, ...cards]); closeAllPopups() })
  }

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserInfo(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={userInfo}>
        <Header />
        <Main onEditProfile={openProfileEdit} onAddPlace={openPlaceAdd} onEditAvatar={openAvatarEdit} cards={cards} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleAvatarUpdate} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onPlaceAdd={handlePlaceAdd} />



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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
