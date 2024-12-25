import { useParams } from "react-router-dom";
import listaProductos from "../data/productos";
import "./productos.css"

function ItemsDetailsContainer() {
  
  const { id } = useParams()
  
  const producto = listaProductos.find((producto) => producto.id === parseInt(id));
  return (
    <div className="container">
      <h1 className="title">Producto</h1>
      <div>
         
        <article key={producto.id} className="box">
            <h5>{producto.title}</h5>
            <img src={producto.image} alt={producto.title} />
            <p>{producto.description}</p>
        </article>
    
      </div>
    </div>
  )
}

export default ItemsDetailsContainer;