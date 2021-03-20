import {FETCH_ORDERS, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_ERROR, DELETE_ORDER} from '../actionTypes';
const initialStateCart = {
    orders: [],
    error: null,
    delivery: 500
};

const reducerCart =(state=initialStateCart, action) => {
    switch (action.type){
        case FETCH_ORDERS:
            return{...state, orders: action.value};
        case FETCH_ORDERS_SUCCESS:
            const ordersCopy = [...state.orders]
            ordersCopy.push(action.value)
            return{...state, orders: ordersCopy};
        case FETCH_ORDERS_ERROR: 
            return{...state, error: action.error};
        case DELETE_ORDER:
            return{...state, orders: action.value}
        default: return state;
    };
};

export default reducerCart;