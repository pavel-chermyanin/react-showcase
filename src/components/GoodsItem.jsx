

const GoodsItem = (props) => {

    function transformObj(obj) {
        return {
            id: obj.mainId,
            name: obj.displayName,
            description: obj.displayDescription,
            price: obj.price.finalPrice,
            img: obj.displayAssets[0].full_background
        }
    }

    const {
        id,
        name,
        description,
        price,
        img
    } = transformObj(props);

    const onAddItemToCart = () => {
        const newObj = {
            id,
            name,
            description,
            price,
            img
        };
        props.addToBasket(newObj)
    }
    
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
            className="card ">
            <div className="card-image">
                <img src={img} alt={name} />

            </div>
            <div style={{
                flexGrow: 1
            }}
                className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div
                className="card-action card-footer">
                <button
                    onClick={onAddItemToCart}
                    className="btn">Купить</button>
                <span
                    style={{
                        fontSize: '1.6rem'
                    }}
                    className="right">{price} руб</span>
            </div>
        </div>
    )
}

export default GoodsItem



