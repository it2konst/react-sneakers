import React from "react";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";
import Card from "./components/Card/Card";

function App() {
    const [itemsSneakers, setItemsSneakers] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch("https://6737fa994eb22e24fca69cdb.mockapi.io/items")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItemsSneakers(json);
            });
    }, []);

    const onAddToCart = (obj) => {
        // setCartItems((prev) => [...prev, obj]);
        // setCartItems([...cartItems, obj]);
        const itemExists = cartItems.some((item) => item.title === obj.title);
        if (!itemExists) {
            setCartItems((prev) => [...prev, obj]);
        } else {
            alert("Этот товар уже в корзине!");
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <CartDrawer items={cartItems} itemsSneakers={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className="content-wrapper d-flex align-center justify-between mb-40">
                    {/* <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1> */}
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
                    {/* {itemsSneakers.map((item, index) => ( */}
                    {itemsSneakers
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                onFavorite={() => {
                                    console.log("click1");
                                }}
                                onPlus={(obj) => {
                                    onAddToCart(obj);
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
