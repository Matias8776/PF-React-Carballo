import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const[cantidad, setCantidad] = useState(initial)

    const incremento = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const decremento = () => {
        if(cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className= 'contador'>
            <div className= 'controles'>
                <button className='botonCantidad' onClick={decremento}>-</button>
                <p className= 'numero'>{cantidad}</p>
                <button className= 'botonCantidad' onClick={incremento}>+</button>
            </div>
            <div>
                <button className= 'boton' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount