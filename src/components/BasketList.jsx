import { BasketItem } from "./BasketItem"



const BasketList = (props) => {
    const {
        order,
        handleBasket = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props

    const totalPrice = order.reduce((sum,el) => {
        return sum += el.price * el.quantity
    }, 0)
    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Корзина
            </li>
            {order.length ? order.map(item => {
                return <BasketItem
                    decQuantity={decQuantity}
                    incQuantity={incQuantity}
                    removeFromBasket={removeFromBasket}
                    {...item}
                    key={item.id} />
            }) : <li className="collection-item">
                Корзина пуста
            </li>}

            <li className="collection-item active">
                Общая стоимость : {totalPrice} руб

            </li>
            <li className="collection-item">
                <button className=" btn">
                    Оформить заказ
                </button>
            </li>
            <i
                onClick={handleBasket}
                className="material-icons basket-close">close</i>
        </ul>
    )
}

export { BasketList }