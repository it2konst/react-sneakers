import Card from "./components/Card";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay" style={{ display: "none" }}>
                <div className="drawer d-flex flex-column">
                    <h2 className="d-flex justify-between mb-30">
                        Корзина
                        <img src="./img/cards/remove-act.svg" alt="Remove" />
                    </h2>

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
                        <button className="greenButton">
                            Оформить заказ
                            <img src="./img/cart/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>

            <Header />

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="card-wrapper d-flex flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default App;
