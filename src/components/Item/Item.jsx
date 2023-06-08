import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({id, nombre, imagen, precio, stock}) => {
    return (
        <article className= 'cardItem'>
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
                    Precio: ${precio}
                </p>
                <p className= 'informacion'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className= 'itemFooter'>
                <button><Link to={`/item/${id}`} className= 'detalle'>Ver detalle</Link></button>
            </footer>
        </article>
    )
}

export default Item