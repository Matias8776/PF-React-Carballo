import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from "./context/CartContext"
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

const App = () => {
    return (
        <div className= 'app'>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path= '/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
                        <Route path= '/categoria/:categoriaId' element={<ItemListContainer />} />
                        <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path= '/cart' element={<Cart />} />
                        <Route path= '/checkout' element={<Checkout />} />
                        <Route path= '*' element={<h2>404 NOT FOUND</h2>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
