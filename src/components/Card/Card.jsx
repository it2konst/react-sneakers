import styles from "./Card.module.scss";

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="./img/cards/heart-unliked.svg" alt="Heart unliked" />
            </div>
            <img src={props.imgUrl} alt="Sneakers" width={133} height={112} />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className="button" type="button" onClick={() => alert(123)}>
                    <img src="./img/cards/plus.svg" alt="Plus" width={32} height={32} />
                </button>
            </div>
        </div>
    );
}

export default Card;
