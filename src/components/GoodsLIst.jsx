import GoodsItem from "./GoodsItem"



const GoodsLIst = (props) => {
    const { goods = [] } = props

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => {
                return <GoodsItem key={item.mainId} {...item}/>
            })}
        </div>
    )
}

export default GoodsLIst