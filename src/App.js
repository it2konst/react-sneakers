import React from "react";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";
import Card from "./components/Card/Card";

// const arrSneakers = [
//     { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999", imgUrl: "./img/cards/nike-blazer-mid-01.webp" },
//     { title: "Мужские Кроссовки Nike Air Max 270", price: "12 999", imgUrl: "./img/cards/nike-air-02.webp" },
//     { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", imgUrl: "./img/cards/nike-blazer-mid-03.webp" },
//     { title: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", imgUrl: "./img/cards/aka-boku-04.webp" },
// ];

function App() {
    const [itemsSneakers, setItemsSneakers] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://6737fa994eb22e24fca69cdb.mockapi.io/items")
            .then((response) => response.json())
            .then((json) => setItemsSneakers(json));
    }, []);

    return (
        <div className="wrapper clear">
            {cartOpened && <CartDrawer onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className="content-wrapper d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="card-wrapper d-flex">
                    {itemsSneakers.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imgUrl={obj.imgUrl}
                            onClickFavorite={() => {
                                console.log("click1");
                            }}
                            onClickPlus={() => {
                                console.log("click2");
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
