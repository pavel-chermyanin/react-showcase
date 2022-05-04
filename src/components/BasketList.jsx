import { BasketItem } from "./BasketItem"
import { useContext } from "react";
import { ShopContext } from "../context";


const BasketList = (props) => {
    const {
        order,
        handleBasketShow = Function.prototype,
    } = useContext(ShopContext)

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
                onClick={handleBasketShow}
                className="material-icons basket-close">close</i>
        </ul>
    )
}

export { BasketList }