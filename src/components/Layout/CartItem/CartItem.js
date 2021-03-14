
const CartItem = ({name, counter, price}) => {
    return (
        <div>
            <p>{counter} x {name} {price}</p>
        </div>
    );
};

export default CartItem;