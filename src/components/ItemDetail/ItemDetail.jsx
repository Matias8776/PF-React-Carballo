import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, imagen, categoria, descripcion, precio, stock }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregarItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, nombre, precio, imagen, stock
        }

        agregarItem(item, cantidad)
    }

    return (
        <article className= 'cardItemDetail'>
            <header className='header'>
                <h2 className= 'itemNombre'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='itemImagen' />
            </picture>
            <section>
                <p className= 'informacion'>
                    Categoria: {categoria}
                </p>
                <p className= 'informacion'>
                    Descripcion: {descripcion}
                </p>
                <p className= 'informacion'>
                    Precio: {precio}
                </p>
            </section>
            <footer className= 'itemFooter'>
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/cart'><button className= 'boton'>Finalizar compra</button></Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail