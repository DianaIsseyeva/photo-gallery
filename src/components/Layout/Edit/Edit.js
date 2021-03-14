import {useSelector, useDispatch} from "react-redux";
import {openCurrentProduct, deleteProduct} from '../../../store/actions';


const CurrentProduct =(props)=> {
    const currentProduct = useSelector(state => state.currentProduct);   
    const dispatch = useDispatch();

    const edit =(item)=> {
        props.history.push({
            pathname: '/current-product/edit',
        });
        dispatch(openCurrentProduct(item))
    }

    const deleteCurrentProduct =async(currentProduct) => {
        dispatch(deleteProduct(currentProduct));
        props.history.push({
            pathname: '/',
        });
    }

    return (
        <div>
            <img src={currentProduct.image}/>
            <p>{currentProduct.name}</p>
            <p>{currentProduct.number}</p>
            <p>{currentProduct.email}</p>
            <button className = "btn" type = "submit" onClick={()=>edit(currentProduct)}>Edit</button>
            <button className = "btn" type = "submit" onClick={()=>deleteCurrentProduct(currentProduct)}>Delete</button>
        </div>
    )
}

export default CurrentProduct;  