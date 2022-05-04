import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from '../config';
import { ShopContext } from "../context";
import { Alert } from "./Alert";
import { BasketList } from "./BasketList";
import { Cart } from "./Cart";
import GoodsLIst from "./GoodsLIst";
import { Preloader } from "./Preloader";


const Shop = () => {
    const {
        loading,
        setGoods,
        isBasketShow,
        alertName
    } = useContext(ShopContext)


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                setGoods(data.shop)
            })
    }, [])
    return (
        <main className="content container">
            <Cart />
            {loading ? <Preloader /> : <GoodsLIst />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    )
}

export { Shop }