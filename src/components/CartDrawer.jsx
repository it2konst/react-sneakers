function CartDrawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">
                    Корзина
                    <img className="cu-p" onClick={onClose} src="./img/cards/remove-act.svg" alt="Remove" />
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center">
                            <div className="cartItemImg" style={{ backgroundImage: `url("${obj.imgUrl}")` }}></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img src="./img/cards/remove-act.svg" alt="Remove" />
                        </div>
                    ))}
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>

                    <button className="greenButton">
                        Оформить заказ
                        <img src="./img/cart/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartDrawer;
