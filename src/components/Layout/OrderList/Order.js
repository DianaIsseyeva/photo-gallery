const Order = ({name, counter, price}) => {

    return(
        <div >
            <p>{counter} x {name} {price} KZT</p>
        </div>
    );
};

export default Order;