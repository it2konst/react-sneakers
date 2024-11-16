import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imgUrl, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ imgUrl, title, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="./img/cards/heart-unliked.svg" alt="Heart unliked" />
            </div>
            <img src={imgUrl} alt="Sneakers" width={133} height={112} />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className="cu-p" onClick={onClickPlus} src={isAdded ? "./img/cards/btn-checked.svg" : "./img/cards/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;
