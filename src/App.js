import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";
import Card from "./components/Card";

const arrSneakers = [
    { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999", imgUrl: "./img/cards/nike-blazer-mid-01.webp" },
    { name: "Мужские Кроссовки Nike Air Max 270", price: "12 999", imgUrl: "./img/cards/nike-air-02.webp" },
    { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", imgUrl: "./img/cards/nike-blazer-mid-03.webp" },
    { name: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", imgUrl: "./img/cards/aka-boku-04.webp" },
];

function App() {
    return (
        <div className="wrapper clear">
            <CartDrawer />
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
                    {arrSneakers.map((obj) => (
                        <Card title={obj.name} price={obj.price} imgUrl={obj.imgUrl} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;