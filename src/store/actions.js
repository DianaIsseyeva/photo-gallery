import axios from 'axios';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT, CREATE_NEW_PRODUCT, OPEN_CURRENT_PRODUCT, SEND_DELETE_REQUEST, SEND_DELETE_SUCCESS, SEND_DELETE_ERROR, FETCH_ORDERS_ERROR, FETCH_ORDERS, FETCH_ORDERS_SUCCESS, DELETE_ORDER} from  './actionTypes';

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

const fetchOrdersRequest=value=>{
    return{type: FETCH_ORDERS, value};
};

const fetchOrdersSuccess =value=> {
    return{type: FETCH_ORDERS_SUCCESS, value};
};

const fetchOrdersError =error=> {
    return{type: FETCH_ORDERS_ERROR, error};
};

export const addProduct = value => {
    return {type: ADD_PRODUCT, value};
};

const sendDeleteRequest =()=> {
    return{type: SEND_DELETE_REQUEST};
};

const sendDeleteSuccess =() => {
    return{type: SEND_DELETE_SUCCESS};
};

const sendDeleteError=() => {
    return{type: SEND_DELETE_ERROR};
};

const sendDeleteOrderRequest = value => {
    return{type: DELETE_ORDER, value};
}

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
    return async dispatch => {
        dispatch(sendProductRequest());
        try {
            await axios.post("https://js-7-march-default-rtdb.firebaseio.com/dishes.json", {name: newProduct.name, price: newProduct.price, image: newProduct.image});
            dispatch(sendProductSuccess());
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
            dispatch(sendProductError())
        }
        
    };
};

export const deleteProduct = (item) => {
    return async dispatch => {
        dispatch(sendDeleteRequest());
        try {
            await axios.delete(`https://js-7-march-default-rtdb.firebaseio.com/dishes/${item.id}.json`, item);
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

export const sendEditProduct = (item) => {
    return async dispatch => {
        dispatch(sendProductRequest());
        try {
            await axios.put(`https://js-7-march-default-rtdb.firebaseio.com/dishes/${item.id}.json`, item);
            try {
                let array=[];
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
                }
            } catch(e) {
                dispatch(fetchProductsError(e));
        } 
            dispatch(sendProductSuccess(''));
          
        } catch(e) {
            dispatch(sendProductError());
        }
    };
};

export const fetchOrders =()=> {
    return async dispatch => {
        dispatch(fetchOrdersRequest([]));
        try {
            const response = await axios.get("https://js-7-march-default-rtdb.firebaseio.com/orders.json");
            if(response.data) {
                Object.keys(response.data).forEach(async id => {
                    let dishId ='';
                    let dishCount = '';
                    let arrOrder = Object.entries(response.data[id].order);
                    let newOrder = [];
                    for(let i=0; i<arrOrder.length; i++) {
                    dishId = arrOrder[i][0];
                    dishCount = arrOrder[i][1];
                    const res = await axios.get(`https://js-7-march-default-rtdb.firebaseio.com/dishes/${dishId}.json`);
                    arrOrder[i] = {
                        dish: {...res.data, count: dishCount, id: id}};
                    newOrder.push(arrOrder[i]);
                }
                dispatch(fetchOrdersSuccess(newOrder));
            })
        }}
        catch(e) {
            dispatch(fetchOrdersError(e));
        };   
    };
};

export const deleteOrder =(item)=> {
    let dish='';
            item.map(eachDish => {
                dish = eachDish.dish;
                return dish;
              });

    return async dispatch => {
        dispatch(sendDeleteOrderRequest([]));
        try {
            await axios.delete(`https://js-7-march-default-rtdb.firebaseio.com/orders/${dish.id}.json`, dish);
            try {
                const response = await axios.get("https://js-7-march-default-rtdb.firebaseio.com/orders.json");
                if(response.data) {
                    Object.keys(response.data).forEach(async id => {
                        let dishId ='';
                        let dishCount = '';
                        let arrOrder = Object.entries(response.data[id].order);
                        let newOrder = [];
                        for(let i=0; i<arrOrder.length; i++) {
                        dishId = arrOrder[i][0];
                        dishCount = arrOrder[i][1];
                        const res = await axios.get(`https://js-7-march-default-rtdb.firebaseio.com/dishes/${dishId}.json`);
                        const bill = dishCount*res.data.price
                        arrOrder[i] = {
                            dish: {...res.data, count: dishCount, id: id, bill: bill}
                        };
                        newOrder.push(arrOrder[i]);
                    }
                    dispatch(fetchOrdersSuccess(newOrder));
                    });
                }}
            catch(e) {
                dispatch(fetchOrdersError(e));
            };
        } catch(e) {
            dispatch(fetchOrdersError(e));
        }
    };
};
