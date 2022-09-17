export function ImagePopup () {
    return (
        <div className="popup popup_big-image">
        <div className="popup__container popup__container_image">
          <button type="button" className="popup__container-close-button" aria-label="Закрыть"></button>
          <div className="image-container">
            <img src="#" alt="Увеличенная картинка карточки" className="image-container__image" />
            <h2 className="image-container__title"></h2>
          </div>
        </div>
      </div>
    )
}