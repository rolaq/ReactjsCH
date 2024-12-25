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
                        <Boton titulo="electrodomesticos" id="1"/>
                </div>
                <div class="navbar-item">
                        <Boton titulo="libros" id="2"/>
                </div>
                <div class="navbar-item">
                        <Boton titulo="zapatillas" id="3"/>
                </div>
            </div>

        </nav>
    )
}

export default NavBar