import {v4 as uuidv4} from 'uuid';
import './OrderList.css';
import Order from './Order';

const OrderList = ({eachOrder}) => {
    
    return (
        <div>
            {
                eachOrder.map(eachDish => {
                    return <div key = {uuidv4()}>
                    <Order
                        name = {eachDish.dish.name}
                        price = {eachDish.dish.price}
                        counter = {eachDish.dish.count}
                        id = {eachDish.dish.id}
                        />
                    </div>
                })
            }
        </div>
    );
};

export default OrderList;