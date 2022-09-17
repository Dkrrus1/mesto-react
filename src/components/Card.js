export function Card({  }) {
    return (
        <>
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
        </>
    )
}