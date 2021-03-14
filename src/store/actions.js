import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT, CREATE_NEW_PRODUCT, OPEN_CURRENT_PRODUCT, SEND_DELETE_REQUEST, SEND_DELETE_SUCCESS, SEND_DELETE_ERROR} from  './actionTypes';

export const createNewProduct =(value)=> {
    return {type: CREATE_NEW_PRODUCT, value}
};

export const openCurrentProduct= value=> {
    return{type: OPEN_CURRENT_PRODUCT, value};
};

const fetchProductsRequest = () => {
    return {type: FETCH_PRODUCTS};
};
  
const fetchProductsSuccess = value => {
    return {type: FETCH_PRODUCTS_SUCCESS, value};
};

const fetchProductsError = error => {
    return {type: FETCH_PRODUCTS_ERROR, error};
};

const sendProductRequest =()=> {
    return{type: FETCH_PRODUCTS}
}

const sendProductSuccess =() => {
    return{type: FETCH_PRODUCTS}
}

const sendProductError =error => {
    return {type: FETCH_PRODUCTS_ERROR, error};
}

export const addProduct = value => {
    return {type: ADD_PRODUCT, value};
} 

const sendDeleteRequest =()=> {
    return{type: SEND_DELETE_REQUEST};
};

const sendDeleteSuccess =() => {
    return{type: SEND_DELETE_SUCCESS};
};

const sendDeleteError=() => {
    return{type: SEND_DELETE_ERROR};
};

export const fetchProducts =() => {
    return async dispatch => {
        dispatch(fetchProductsRequest());
        try {
            let array =[];
            const response = await axios.get("https://js-7-march-default-rtdb.firebaseio.com/dishes.json");
            if(response.data) {
                Object.keys(response.data).forEach(id => {
                    const product = {
                        name: response.data[id].name,
                        price: response.data[id].price,
                        image: response.data[id].image,
                        id: id
                    };
                    array.push(product);
                });
            dispatch(fetchProductsSuccess(array));
        }} catch(e) {
            dispatch(fetchProductsError(e));
        }
    };
};

export const sendProduct =(newProduct) => {
    console.log(newProduct)
    debugger
    return async dispatch => {
        dispatch(sendProductRequest());
            try {
                await axios.post("https://js-7-march-default-rtdb.firebaseio.com/dishes.json", {name: newProduct.ame, price: newProduct.price, image: newProduct.image});
                dispatch(sendProductSuccess())
            } catch(e) {
                dispatch(sendProductError())
            }
        
    };
};



export const deleteProduct = (item) => {
    return async dispatch => {
        dispatch(sendDeleteRequest());
        try {
            await axios.delete("https://js-7-march-default-rtdb.firebaseio.com/dishes" + `${item.id}` + ".json", item);
            dispatch(sendDeleteSuccess());
            try {
                let array =[];
                const response = await axios.get("https://js-7-march-default-rtdb.firebaseio.com/dishes.json");
                if(response.data) {
                    Object.keys(response.data).forEach(id => {
                        const product = {
                            name: response.data[id].name,
                            price: response.data[id].price,
                            image: response.data[id].image,
                            id: id
                        };
                        array.push(product);
                    });
                dispatch(fetchProductsSuccess(array));
            }} catch(e) {
                dispatch(fetchProductsError(e));
            }
    } catch(e) {
        dispatch(sendDeleteError());
    }  
};
};