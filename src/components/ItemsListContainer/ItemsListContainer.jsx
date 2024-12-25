import { useParams } from "react-router-dom";
import listaProductos from "../data/productos";
import BotonDetalles from "./BotonDetalles";
import "./productos.css"

function ItemsListContainer() {
  
  const { id } = useParams()
  
  const productosFiltrados = id ? listaProductos.filter((producto) => producto.idCategory === id) : listaProductos;

  return (
    <div className="container">
      <h1 className="title">Productos</h1>
      <div>
        { 
          productosFiltrados.map((producto) => (
            <article key={producto.id} className="box">
              <h5>{producto.title}</h5>
              <img src={producto.image} alt={producto.title} />
              <BotonDetalles id={producto.id}/>
            </article>
          ))
        }
      </div>
    </div>

    
  )
}

export default ItemsListContainer;
