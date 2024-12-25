import { Link } from "react-router-dom"

function Boton({titulo , id}){
    return(
        <Link to={`/category/${id}`}>{titulo}</Link>
    )
}

export default Boton