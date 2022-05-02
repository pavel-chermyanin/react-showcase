import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config';
import GoodsLIst from "./GoodsLIst";
import { Preloader } from "./Preloader";


const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)



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
            {
                loading ? <Preloader /> : (
                    <GoodsLIst goods={goods} />
                )
            }
        </main>
    )
}

export { Shop }