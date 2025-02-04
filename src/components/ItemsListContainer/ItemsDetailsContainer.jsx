import "./productos.css";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/firebaseConfig";

function ItemsDetailsContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {


    setLoading(true);

    const docRef = doc(db, "products", String(itemId));

  
    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("No se encontró el producto");
          setProduct(null);
        }
      })
      .catch((error) => {
        console.log("Error obteniendo el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <h2>Cargando producto...</h2>;
  }

  if (!product) {
    return <h3>Producto no encontrado</h3>;
  }

  return (
    <div className="container ItemDetailContainer">
      <h1 className="title">Producto</h1>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemsDetailsContainer;
