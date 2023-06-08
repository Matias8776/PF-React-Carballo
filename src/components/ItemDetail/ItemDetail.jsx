import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ nombre, imagen, categoria, descripcion, precio, stock }) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada ', cantidad)} />
            </footer>
        </article>
    )
}

export default ItemDetail