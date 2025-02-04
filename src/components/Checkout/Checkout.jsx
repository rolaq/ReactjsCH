import { db } from '../../Service/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { getDocs, collection, query, where, documentId, Timestamp, writeBatch, addDoc } from "firebase/firestore";
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useEffect } from 'react';



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    useEffect(() => {
        console.log("Estado actualizado de orderId:", orderId)
    }, [orderId])
    

    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => String(prod.id))

            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))


            const { docs } = productsAddedFromFirestore

            for (const doc of docs) {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
            
                const productAddedToCart = cart.find(prod => String(prod.id) === doc.id)
                const prodQuantity = productAddedToCart?.quantity
            
                console.log(`Producto: ${dataDoc.name}, Stock en DB: ${stockDb}, Cantidad en carrito: ${prodQuantity}`)
            
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            }
            
            console.log("stock: ",outOfStock)
            
            if (outOfStock.length === 0) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                
                setOrderId(orderAdded.id)
                console.log("Estado de orderId:", orderId)
                
                clearCart()
            } else {
                console.error('Hay productos fuera de stock:', outOfStock)
            }
            
           

            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout
