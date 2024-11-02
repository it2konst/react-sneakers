// import "./App.css";

function App() {
    return (
        <div className="wrapper">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img className="mr-15" src="./img/logo.webp" alt="Logo" width={40} height={40} />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="d-flex mr-30">
                        <img className="mr-15" src="./img/cart.svg" alt="cart" width={18} height={18} />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="./img/user-svg.svg" alt="user" width={18} height={18} />
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <h1>Все кроссовки</h1>
                <div className="card"></div>
            </div>
        </div>
    );
}

export default App;
