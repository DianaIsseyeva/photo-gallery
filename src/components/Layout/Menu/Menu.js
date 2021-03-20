import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { fetchProducts, openCurrentProduct, deleteProduct} from '../../../store/actions';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

const Menu =(props) => {
    const menuList = useSelector(state => state.menu.products);  
    const dispatch = useDispatch();

    const edit =(item)=> {
        props.history.push({
            pathname: '/current-product/edit',
        });
        dispatch(openCurrentProduct(item));
    };

    const deleteItem=(item)=> {
        dispatch(deleteProduct(item));
        props.history.push({
            pathname: '/',
        });
    };

    const addNewProduct = () => {
        props.history.push({
            pathname: '/product/admin',
        });
    };

    useEffect (()=> {
        dispatch(fetchProducts());
    }, [dispatch]);
    
    return (
        <>
            <div className="addDish">
                <h2>Dishes</h2>
                <button className = "btn" onClick={addNewProduct}>Add new Dish</button>
            </div>
            <div className = "menuBlock">
                <div className="menu">
                    {
                        menuList.map(item => {
                        return <MenuItem 
                        key={item.id} 
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        edit = {() => edit(item)}
                        deleteItem = {() => deleteItem(item)}
                        />
                        }) 
                    }

                </div>
            </div>
        </>
    );
};

export default Menu;