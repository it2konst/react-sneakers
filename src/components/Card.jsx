function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="./img/cards/heart-unliked.svg" alt="Heart unliked" />
            </div>
            <img src={props.imgUrl} alt="Sneakers" width={133} height={112} />
            <h5>{props.title}</h5>
            <div className="card-bottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" type="button">
                    <img src="./img/cards/plus.svg" alt="Plus" width={32} height={32} />
                </button>
            </div>
        </div>
    );
}

export default Card;
