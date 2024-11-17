import React from "react";
import axios from "axios";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import Header from "./components/Header";
import Card from "./components/Card/Card";

function App() {
    const [itemsSneakers, setItemsSneakers] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [cartOpened, setCartOpened] = React.useState(false);

    // "https://6737fa994eb22e24fca69cdb.mockapi.io/items"
    React.useEffect(() => {
        axios.get("./data.json").then((response) => {
            setItemsSneakers(response.data);
        });

        axios.get("https://6737fa994eb22e24fca69cdb.mockapi.io/cart").then((response) => {
            setCartItems(response.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://6737fa994eb22e24fca69cdb.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://6737fa994eb22e24fca69cdb.mockapi.io/cart/${id}`).then(() => {
            setCartItems((prev) => prev.filter((item) => item.id !== id));
        });
    };

    const onAddToFavorite = (obj) => {
        axios.post("https://6737fa994eb22e24fca69cdb.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, obj]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <CartDrawer items={cartItems} itemsSneakers={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className="content-wrapper d-flex align-center justify-between mb-40">
                    <h1>
                        {searchValue ? (
                            <>
                                Поиск по запросу: <br /> "{searchValue}"
                            </>
                        ) : (
                            "Все кроссовки"
                        )}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        {searchValue && <img className="clear" onClick={() => setSearchValue("")} src="./img/cards/remove-act.svg" alt="Clear" />}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                    </div>
                </div>

                <div className="card-wrapper d-flex">
                    {itemsSneakers
                        .filter((item) => item.title && item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card key={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl} onFavorite={() => console.log("click1")} onPlus={(obj) => onAddToCart(obj)} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
