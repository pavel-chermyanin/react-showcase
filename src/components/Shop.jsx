import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config';
import { BasketList } from "./BasketList";
import { Cart } from "./Cart";
import GoodsLIst from "./GoodsLIst";
import { Preloader } from "./Preloader";


const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)


    const addToBasket = (obj) => {
        const itemIndex = order.findIndex(orderItem => {
            return orderItem.id === obj.id
        })

        if (itemIndex < 0) {
            const newItem = {
                ...obj,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    }

    const handleBasket = (item) => {
        setBasketShow(!isBasketShow)
    }


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, [])
    return (
        <main className="content container">
            <Cart
                handleBasket={handleBasket}
                quantity={order.length} />
            {
                loading ? <Preloader /> : (
                    <GoodsLIst
                        addToBasket={addToBasket}
                        goods={goods} />
                )
            }
            {
                isBasketShow && <BasketList
                    handleBasket={handleBasket}
                    order={order} />
            }
        </main>
    )
}

export { Shop }