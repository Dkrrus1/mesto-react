import React from 'react';
import '../index.css';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const openProfileEdit = () => { setIsEditProfilePopupOpen(true) };
  const openAvatarEdit = () => { setIsEditAvatarPopupOpen(true) };
  const openPlaceAdd = () => { setIsAddPlacePopupOpen(true) };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={openProfileEdit} onAddPlace={openPlaceAdd} onEditAvatar={openAvatarEdit} />
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

      <div className="popup popup_confirm-card-delete">
        <div className="popup__container">
          <button type="button" className="popup__container-close-button" aria-label="Закрыть"></button>
          <form className="edit-form" name="confirm-card-delete" method="post">
            <h3 className="edit-form__title">Вы уверены?</h3>
            <button type="submit" className="edit-form__submit" aria-label="Подтвердить удаление карточки">Да</button>
          </form>
        </div>
      </div>
      <template id="card">
        <li className="card">
          <img src="#" className="card__image" alt="Картинка карточки" />
          <button type="button" className="card__trash-button" aria-label="Удалить карточку"></button>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button type="button" className="card__like-button" aria-label="Поставить лайк"></button>
              <span className="card__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
