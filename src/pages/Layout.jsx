import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Layout(){

    return(
        <div>
            <div className="App">
                <NavBar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;