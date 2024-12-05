import CartWidget from "../CartWidget/CarWidget"
import Boton from "./Botones"


function NavBar () {
    return (
        <nav class="navbar"> 
            <div class="navbar-item">
                <CartWidget />
            </div>
            
            <h3 class="navbar-item">Roland</h3>

            <div class="navbar-end">
                <div class="navbar-item">
                        <Boton titulo="opcion1"/>
                </div>
                <div class="navbar-item">
                        <Boton titulo="opcion2"/>
                </div>
                <div class="navbar-item">
                        <Boton titulo="opcion3"/>
                </div>
            </div>
           
        </nav>
    )
}

export default NavBar