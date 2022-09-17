export function PopupWithForm({name, title, formTitle, isOpened}) {
    return (
        <div className={`popup popup_${name} ${isOpened}`}>
            <div className="popup__container">
                <button type="button" className="popup__container-close-button" aria-label="Закрыть"></button>
                <form className="edit-form" name={name} method="post">
                    <h3 className="edit-form__title">{formTitle}</h3>
                    <button type="submit" className="edit-form__submit" aria-label={name}>Да</button>
                </form>
            </div>
        </div>
    )
}