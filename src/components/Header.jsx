function Header(props) {
    return (
        <header className="d-flex flex-wrap justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="mr-15" src="./img/header/logo.webp" alt="Logo" width={40} height={40} />
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart}>
                    <img src="./img/header/cart.svg" alt="cart" width={18} height={18} />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="./img/header/favorite.webp" alt="User" width={18} height={18} />
                    <span>Закладки</span>
                </li>
                <li>
                    <img src="./img/header/user-svg.svg" alt="User" width={18} height={18} />
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;
