import {useSelector, useDispatch} from "react-redux";
import {useState} from 'react';
import {sendEditProduct} from '../../../store/actions';


const Edit =(props)=> {
    const productForEdit = useSelector(state => state.menu.currentProduct);  
    console.log(productForEdit) 
    const[updatedProduct, setUpdatedProduct] = useState({...productForEdit});

    const dispatch = useDispatch();

    const create =(e) => {
        setUpdatedProduct({...updatedProduct, [e.target.name]: e.target.value});
    };

    const save =(e) => {
        e.preventDefault();
        dispatch(sendEditProduct(updatedProduct));
        props.history.push({
            pathname: '/',
        });
    };

    const back = () => {
        props.history.push({
            pathname: '/',
        });
    };

    return (
        <form>
            <label className="inputRow"><span className="input">Title: </span><input className = "inputText" type="text" name="name" onChange={create} value={updatedProduct.name}/></label>
            <label className="inputRow"><span className="input">Price: </span><input className = "inputText" type="number" name="price" onChange={create} value={updatedProduct.price}/></label>
            <label className="inputRow"><span className="input">Image: </span> <input className = "inputText" type="text" name="image" onChange={create} value={updatedProduct.image}/></label>
            <img src={updatedProduct.image} alt="something"/> <br/>
            <button className = "btn" type = "submit" onClick={save}>Save</button>
            <button className = "btn" type = "submit" onClick={back}>Back</button>
        </form>
    )
}

export default Edit;  