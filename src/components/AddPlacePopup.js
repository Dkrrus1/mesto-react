import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, onPlaceAdd }) {
    const [placeName, setPlaceName] = React.useState('');
    const [placeUrl, setPlaceUrl] = React.useState('');
    function handlePlaceName (e) {
        setPlaceName(e.target.value)
    }
    function handlePlaceUrl (e) {
        setPlaceUrl(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault();
        onPlaceAdd({
            name: placeName,
            link: placeUrl
        })
    }
    return (
        <PopupWithForm name={'link-form'} title={'Новое место'} isOpened={isOpen} submitName={'Сохранить'} onClose={onClose} onSubmit={handleSubmit}
            children={<>
                <input type="text" name="name" id="link-name" className="edit-form__name popup__input" placeholder="Название"
                    minLength="2" maxLength="200" required value={placeName} onChange={handlePlaceName} />
                <span className="popup__input-error link-name-error">Ошибка</span>
                <input type="url" name="link" id="link-url" className="edit-form__profession popup__input"
                    placeholder="Ссылка на картинку" required value={placeUrl} onChange={handlePlaceUrl} />
                <span className="popup__input-error link-url-error">Ошибка</span>
            </>}
        />
    )
}