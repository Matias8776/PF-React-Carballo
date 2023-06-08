import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock.jsx'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className= 'detalleItem'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer