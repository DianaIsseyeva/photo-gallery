import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, CREATE_NEW_PRODUCT} from  '../actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: null,
    newProduct: '',
    currentProduct: ''
};
 
const reducerProducts=(state=initialState, action) => {
    switch (action.type){
        case CREATE_NEW_PRODUCT: 
            return {...state, newProduct: action.value};
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