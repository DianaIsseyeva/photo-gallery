import {useSelector, useDispatch} from "react-redux";
import { createNewProduct, sendProduct } from '../../../store/actions';
import './AddProductForm.css';

const AddProductForm =(props)=> {
    const dispatch = useDispatch();
    const newProduct = useSelector(state => state.menu.newProduct);   

    const create =(e) => {
        dispatch(createNewProduct({...newProduct, [e.target.name]: e.target.value}));
    };

    const save =(e) => {
        e.preventDefault()
        dispatch(sendProduct(newProduct));
        props.history.push({
            pathname: '/'
        });
    };

        const back =() => {
            props.history.push({
                pathname: '/',
            });
        }
  
    return (
        <form>
            <label className="inputRow"><span className="input">Title: </span><input className = "inputText" type="text" name="name" onChange={create} value={newProduct.name}/></label>
            <label className="inputRow"><span className="input">Price: </span><input className = "inputText" type="number" name="price" onChange={create} value={newProduct.price}/></label>
            <label className="inputRow"><span className="input">Image: </span> <input className = "inputText" type="text" name="image" onChange={create} value={newProduct.image}/></label>
            <button className = "btn" type = "submit" onClick={save}>Save</button>
            <button className = "btn" type = "submit" onClick={back}>Back</button>
        </form>
    );
}

export default AddProductForm;