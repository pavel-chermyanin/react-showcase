

export function reducer(state, { type, payload }) {
    switch (type) {
        case 'CLOSE_ALERT': {
            return {
                ...state,
                alertName: ''
            }
        }
        case 'INC_QUANTITY': {
            const newOrder = state.order.map(el => {
                if (el.id === payload.id) {
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                } else {
                    return el
                }
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case 'DEC_QUANTITY': {
            const newOrder = state.order.map(el => {
                if (el.id === payload.id) {
                    return {
                        ...el,
                        quantity: el.quantity > 0 ?
                            el.quantity - 1 : 0
                    }
                } else {
                    return el
                }
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case 'TOGGLE_BASKET_SHOW': {
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        }
        case 'REMOVE_FROM_BASKET': {
            return {
                ...state,
                order: state.order.filter(el => {
                    return el.id !== payload.id
                })
            }
        }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => {
                return orderItem.id === payload.id
            })
            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }

            return {
                ...state,
                alertName: payload.name,
                order: newOrder
            }
        }
        case 'SET_GOODS' : {
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        }

        default:
            return state
    }





}