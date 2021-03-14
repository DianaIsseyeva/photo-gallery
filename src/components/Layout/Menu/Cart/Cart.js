import {useSelector} from "react-redux";
import {useState} from 'react';
import CartItem from './../../CartItem/CartItem';
import Modal from '../../UI/Modal/Modal';
import './Cart.css';

const Cart =() => {
    const {selectedProduct, delivery, totalBill} = useSelector(state => state.cart);
    const[isShowModal, setIsShowModal] = useState(false);

    const completeOrder =() => {

    };

    const show =() => {
        setIsShowModal(true);
    };

    const close =() => {
        setIsShowModal(false);
    };

    return (
        <>
        {/* {isShowModal===true ? <Modal close={close} show={show} order={selectedProduct}/> : null} */}
            {
            selectedProduct.map(item => {
                return <CartItem 
                key={item.id} 
                name={item.name}
                price={item.price}
                counter={item.counter}
                />
            }) 
            } 
            <p>Delivery {delivery}</p>
            <p>Total: {totalBill}</p>
            <button className="btnOrder" onClick = {completeOrder}>Complete order</button>
        </>
    )
}

export default Cart;