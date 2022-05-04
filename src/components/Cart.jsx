import { useContext } from "react";
import { ShopContext } from "../context";

const Cart = (props) => {
    const {
        order,
        handleBasketShow = Function.prototype
    } = useContext(ShopContext)

    const quantity = order.length
    return (
        <div
            onClick={handleBasketShow}
            className="cart blue lighten-2 white-text">
            <i className="material-icons">
                local_grocery_store
            </i>
            {quantity ?
                <span
                    className="cart-quantity">
                    {quantity}
                </span> : null}
        </div>

    )
}

export { Cart }