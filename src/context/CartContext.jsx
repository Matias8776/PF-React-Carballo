import { createContext, useState } from "react"

export const CartContext = createContext(null)

const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])

    const agregarItem = (item, cantidad) => {
        if(!enElCarrito(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const eliminarItem = (itemId) => {
        const itemEnCarrito = cart.find((prod) => prod.id === itemId)

        if (itemEnCarrito) {
            if (itemEnCarrito.cantidad === 1) {
                const cartActualizado = cart.filter((prod) => prod.id !== itemId)
                setCart(cartActualizado);
            } else {
                const cartActualizado = cart.map((prod) =>
                    prod.id === itemId ? { ...prod, cantidad: prod.cantidad - 1 } : prod
                );
                setCart(cartActualizado);
            }
        }
    }

    const borrarCart = () => {
        setCart([])
    }

    const enElCarrito = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cantidadTotal = cart.reduce((acc, curr) => {
        return acc + curr.cantidad
    }, 0)

    const total = cart.reduce((acc, curr) => {
        return acc + curr.precio * curr.cantidad
    }, 0)

    return (
        <CartContext.Provider value={{ cart, agregarItem, eliminarItem, borrarCart, cantidadTotal, total }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider