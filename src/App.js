// import "./App.css";

function App() {
    return (
        <div className="wrapper">
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
                <h1 className="mb-40">Все кроссовки</h1>

                <div className="card-wrapper d-flex flex-wrap gap-40">
                    <div className="card">
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
