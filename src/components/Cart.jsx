

const Cart = (props) => {
    const {
        quantity = 0,
        handleBasket = Function.prototype
    } = props
    return (
        <div
            onClick={handleBasket}
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