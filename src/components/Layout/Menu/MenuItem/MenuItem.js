import './MenuItem.css'
const MenuItem =({image, name, price, edit, deleteItem}) => {

      
    return (
        <div  className="row">
            <div className="nameBlock">
                <img src={image} className ="img" alt="product"/>
                <div className="nameBlock">
                    <p className="text">{name}</p>
                    <p>{price} KZT</p>
                </div>
            </div>
          
           
           <div>
                <button className = "btn" onClick={edit}>Edit</button>
                <button className = "btn" onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default MenuItem;