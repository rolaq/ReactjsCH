import { Link } from "react-router-dom"

function BotonDetalles({id}){
    return(
        <div>
            <button class="button is-text">
            <Link to={`/item/${id}`}>Mas detalles</Link>
            </button>
        </div>
        
       
    )
}

export default BotonDetalles