import { useState, useContext, useEffect } from 'react'
import './Checkout.css'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const { cart, borrarCart, total } = useContext(CartContext)

    const estadoInicial = {
        nombre: '',
        email: '',
        confirmarEmail: '',
        cart: cart.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad })),
        total
    }

    const [values, setValues] = useState(estadoInicial)
    const [emailError, setEmailError] = useState('')
    const [ordenId, setOrdenId] = useState(null)

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (values.email !== values.confirmarEmail) {
            setEmailError('Los campos de correo electrónico no coinciden.')
            return
        } else {
            setEmailError('')
        }

        const { confirmarEmail, ...ordenDatos } = values
        const docRef = await addDoc(collection(db, 'ordenes'), {
            ...ordenDatos,
            fecha: serverTimestamp()
        })
        setOrdenId(docRef.id)
        setValues(estadoInicial)
    }

    useEffect(() => {
        if (ordenId) {
            borrarCart()
        }
    }, [ordenId])

    const cartVacio = cart.length === 0

    return (
        <div className= 'contenedorForm'>
            <h2>Checkout</h2>
            {ordenId ? (
                <div className= 'mensajeOrden'>
                    <h5>Tu orden ha sido creada exitosamente. ID de la orden: {ordenId}</h5>
                    <Link to="/"><button className= 'boton' onClick={() => setOrdenId(null)}>Volver al inicio</button></Link>
                </div>
            ) : (
                <form className='form' onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control input" id="nombre" name='nombre' value={values.nombre} onChange={handleChange} required disabled={cartVacio}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name='email' value={values.email} onChange={handleChange} required disabled={cartVacio}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmarEmail" className="form-label">Confirmar email</label>
                        <input type="email" className="form-control" id="confirmarEmail" name='confirmarEmail' value={values.confirmarEmail} onChange={handleChange} required disabled={cartVacio}></input>
                        {emailError && <p className= 'error'>{emailError}</p>}
                    </div>
                    <button type="submit" className= 'boton' disabled={cartVacio}>Crear orden</button>
                </form>
            )}
        </div>
    )
}

export default Checkout