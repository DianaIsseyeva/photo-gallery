import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { fetchProducts, addProduct, openCurrentProduct, deleteProduct} from '../../../store/actions';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';
// import Cart from './Cart/Cart';


const Menu =(props) => {
    const menuList = useSelector(state => state.menu.products);  
    const dispatch = useDispatch();
    // const[isShow, setIsShow] = useState(false);

    // const addToCart =(item) => {
    //     dispatch(addProduct(item));
    //     setIsShow(true);
    // };

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
        dispatch(addProduct());
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
                {/* <div className="cart">
                    {isShow ? 
                        <Cart/> 
                    : null} 
                </div> */}
                   
            </div>
           
        </>
    )
}

export default Menu;