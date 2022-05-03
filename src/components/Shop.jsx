import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config';
import { Alert } from "./Alert";
import { BasketList } from "./BasketList";
import { Cart } from "./Cart";
import GoodsLIst from "./GoodsLIst";
import { Preloader } from "./Preloader";


const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

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
        setAlertName(obj.name)
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }

    const handleBasket = (item) => {
        setBasketShow(!isBasketShow)
    }



    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                return {
                    ...el,
                    quantity: el.quantity + 1
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                return {
                    ...el,
                    quantity: el.quantity > 0 ? el.quantity - 1 : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
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
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    removeFromBasket={removeFromBasket}
                    handleBasket={handleBasket}
                    order={order} />
            }
            {
               alertName && (
                   <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                   />
               ) 
            }
        </main>
    )
}

export { Shop }