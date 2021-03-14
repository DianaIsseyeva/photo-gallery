import {useSelector, useDispatch} from "react-redux";
import { createNewProduct, sendProduct } from '../../../store/actions';

const AddProductForm =(props)=> {
    const dispatch = useDispatch();
    const newProduct = useSelector(state => state.newProduct);   

    const create =(e) => {
        dispatch(createNewProduct({...newProduct, [e.target.name]: e.target.value}));
    };

    const save =(e) => {
        e.preventDefault()
        dispatch(sendProduct(newProduct));
    };

        const back =() => {
            props.history.push({
                pathname: '/',
            });
        }
  
    return (
        <form className = "row">
            <label>Title: <input className = "inputText" type="text" name="name" onChange={create} value={newProduct.name}/></label>
            <label>Price: <input className = "inputText" type="text" name="price" onChange={create} value={newProduct.price}/></label>
            <label>Image: <input className = "inputText" type="text" name="image" onChange={create} value={newProduct.image}/></label>
            <button className = "btn" type = "submit" onClick={save}>Save</button>
            <button className = "btn" type = "submit" onClick={back}>Back</button>
        </form>
    );
}

export default AddProductForm;