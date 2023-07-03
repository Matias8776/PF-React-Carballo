import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, borrarCart, total, eliminarItem } = useContext(CartContext)
    const handleEliminarItem = (itemId) => {
        eliminarItem(itemId);
    };

    if (cart.length === 0) {
        return(
        <div className='sinItemsCarrito'>
            <h1>No hay items en el carrito</h1>
            <Link to='/'><button className='boton'>Productos</button></Link>
        </div>
        )
    }
    return (
        <div>
            {cart.map(p => (
                <div key={p.id} className= 'itemsCarrito'>
                    <img src={p.imagen} alt={p.nombre} className= 'imagenCarrito'/>
                    <h5>{p.nombre}</h5>
                    <h5>Price: ${p.precio}</h5>
                    <h5>Quantity: {p.cantidad}</h5>
                    <button onClick={() => handleEliminarItem(p.id)} className='boton'>X</button>
                </div>
            ))}
            <div className='footerCarrito'>
                <h3>Total: ${total}</h3>
                <button onClick={() => borrarCart()} className='boton'>Limpiar carrito</button>
                <Link to='/checkout'><button className='boton'>Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart