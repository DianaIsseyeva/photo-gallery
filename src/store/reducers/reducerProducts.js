import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from  '../actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: null,
};
 
const reducerProducts=(state=initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return{...state};
        case FETCH_PRODUCTS_SUCCESS:
            return{...state, products: action.value};
        case FETCH_PRODUCTS_ERROR: 
            return{...state, error: action.error};
        default: return state;
    };
};

export default reducerProducts;