import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BotonDetalles from "./BotonDetalles"
import "./productos.css"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../Service/firebaseConfig"

function ItemsListContainer() {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const categoryIdNumber = categoryId ? Number(categoryId) : null

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==",  categoryIdNumber))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      })
      .catch((error) => {
        console.log("Error obteniendo productos:", error)
      })
      .finally(() => {
        setLoading(false)
      });
  }, [categoryId])

  if (loading) {
    return <h2>Cargando productos...</h2>
  }

  return (
    <div className="container">
      <h1 className="title">Productos</h1>
      <div>
        {products.length > 0 ? (
          products.map((producto) => (
            <article key={producto.id} className="box">
              <h5>{producto.name}</h5>
              <img src={producto.img} alt={producto.name} />
              <BotonDetalles id={producto.id} />
            </article>
          ))
          
        ) : (
          <h3>No hay productos disponibles</h3>
        )}

        {console.log("Productos cargados:", products)}

      </div>
    </div>
  );
}

export default ItemsListContainer;
