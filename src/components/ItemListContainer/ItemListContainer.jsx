import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../../services/firebase/firebaseConfig'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        const getItems = async () => {
            setLoading(true)
            const collectionRef = categoriaId
                ? query(collection(db, 'items'), where('categoria', '==', categoriaId))
                : collection(db, 'items')
            const querySnapshot = await getDocs(collectionRef)
            const items = querySnapshot.docs.map((doc) => {
                const data = doc.data()
                return { id: doc.id, ...data }
            });
            setProducts(items)
            setLoading(false)
        };

        getItems()

    }, [categoriaId])

    return (
        <div className='productos'>
            <h1 className='bienvenidos'>{greeting}</h1>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer