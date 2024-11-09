// import "./App.css";

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex flex-column">
                    <h2 className="d-flex justify-between mb-30">Корзина</h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center">
                            <div className="cartItemImg" style={{ backgroundImage: 'url("./img/cards/nike-blazer-mid-01.webp")' }}></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>Цена: 12 999 руб.</b>
                            </div>
                            <img src="./img/cards/remove-act.svg" alt="Remove" />
                        </div>

                        <div className="cartItem d-flex align-center">
                            <div className="cartItemImg" style={{ backgroundImage: 'url("./img/cards/nike-blazer-mid-01.webp")' }}></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>Цена: 12 999 руб.</b>
                            </div>
                            <img src="./img/cards/remove-act.svg" alt="Remove" />
                        </div>
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
                        <button>Оформить заказ</button>
                    </div>
                </div>
            </div>

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img className="mr-15" src="./img/header/logo.webp" alt="Logo" width={40} height={40} />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="d-flex mr-30">
                        <img className="mr-15" src="./img/header/cart.svg" alt="cart" width={18} height={18} />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="./img/header/user-svg.svg" alt="User" width={18} height={18} />
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="card-wrapper d-flex flex-wrap">
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

                    <div className="card">
                        <img src="./img/cards/nike-air-02.webp" alt="Sneakers" width={133} height={112} />
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

                    <div className="card">
                        <img src="./img/cards/nike-blazer-mid-03.webp" alt="Sneakers" width={133} height={112} />
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

                    <div className="card">
                        <img src="./img/cards/aka-boku-04.webp" alt="Sneakers" width={133} height={112} />
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
                </div>
            </div>
        </div>
    );
}

export default App;
