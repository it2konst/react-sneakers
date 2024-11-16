import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite}>
                <img src="./img/cards/heart-unliked.svg" alt="Heart unliked" />
            </div>
            <img src={props.imgUrl} alt="Sneakers" width={133} height={112} />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "./img/cards/btn-checked.svg" : "./img/cards/plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;
