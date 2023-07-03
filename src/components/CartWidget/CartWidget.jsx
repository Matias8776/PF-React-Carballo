import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)
    return (
        <section className= 'carrito' style={{ display: cantidadTotal > 0 ? 'flex' : 'none'}}>
            <img src="../src/assets/carrito.svg" alt="carrito" />
            <div>{ cantidadTotal }</div>
        </section>
    )
}

export default CartWidget