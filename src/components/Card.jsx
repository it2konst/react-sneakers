function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="./img/cards/heart-unliked.svg" alt="Heart unliked" />
            </div>
            <img src="./img/cards/nike-blazer-mid-01.webp" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card-bottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button" type="button">
                    <img src="./img/cards/plus.svg" alt="Plus" width={32} height={32} />
                </button>
            </div>
        </div>
    );
}

export default Card;
