import "./productos.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

function ItemDetail({ id, name, img, description, price, stock }) {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id,
      name,
      price,
    }
    addItem(item, quantity);
  }

  return (
    <article key={id} className="box">
      <h5>{name}</h5>
      <img src={img} alt={name} />
      <p>{description}</p>

      <div className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </article>
  );
}

export default ItemDetail;
