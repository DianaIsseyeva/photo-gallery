import {useSelector, useDispatch} from "react-redux";
import {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {fetchOrders, deleteOrder} from '../../../../store/actions';
import OrderList from '../../OrderList/OrderList';
import './Cart.css';

const Cart =() => {
    const ordersList = useSelector(state => state.cart.orders);
    const delivery = useSelector(state=> state.cart.delivery);
    const dispatch = useDispatch();

    const completeOrder =(item) => {
       dispatch(deleteOrder(item));
    };

    const totalBill=(eachOrder)=> {
        let bill = 0;
        eachOrder.map(orderItem =>
             bill += parseInt(orderItem.dish.price)*parseInt(orderItem.dish.count)
            );
        return bill+=delivery;
    };

    useEffect (()=> {
        dispatch(fetchOrders());
    }, [dispatch]);

    return (
        <div >
            {
                ordersList.map(eachOrder => { 
                    return <div className = "order" key={uuidv4()}> 
                    <OrderList 
                    eachOrder={eachOrder}
                    />
                    <p>Delivery {delivery} KZT</p>
                    <p>Total: {totalBill(eachOrder)} KZT</p>
                    <button className="btnComplete" onClick = {()=>completeOrder(eachOrder)}>Complete order</button>
                   </div>
                })  
            }
        </div>
    );
};

export default Cart;