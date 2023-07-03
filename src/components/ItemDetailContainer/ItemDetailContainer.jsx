import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        const getItem = async () => {
            const docRef = doc(db, "items", itemId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setProduct(docSnap.data())
            }

            setLoading(false)
        }

        getItem()

    }, [itemId])

    return(
        <div className= 'detalleItem'>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : product ? (
                <ItemDetail {...product} />
            ) : (
                <h2>PRODUCTO NO DISPONIBLE</h2>
            )}
        </div>
    )
}

export default ItemDetailContainer