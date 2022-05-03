

const BasketItem = (props) => {
    const {
        incQuantity,
        decQuantity,
        removeFromBasket,
        id,
        name,
        price,
        quantity
    } = props;
    return (
        <li className="collection-item basket-item">
            <div className="item__inner">
                <div className="item__inner-name">
                    {name}
                </div>
                <i
                    onClick={() => decQuantity(id)}
                    className="material-icons basket-quantity">remove</i>
                x{quantity}
                <i
                    onClick={() => incQuantity(id)}
                    className="material-icons basket-quantity">add</i>
                = {price * quantity} руб
            </div>
            <span
                onClick={() => removeFromBasket(id)}
                className="secondary-content">
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    )
}

export { BasketItem }