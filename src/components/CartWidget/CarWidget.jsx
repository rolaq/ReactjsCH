import { AiOutlineCodeSandbox } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to="/" className="CartWidget">
                <AiOutlineCodeSandbox />
            </Link>
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </div>
    );
}

export default CartWidget
