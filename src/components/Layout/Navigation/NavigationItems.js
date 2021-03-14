import React from 'react';
import './NavigationItems.css';
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";

const NavigationItems = () => {
    return(
        <>  
            <div className="NavBlock">
                <h1 className="title">Turtle Pizza Admin</h1>
                <ul className="NavigationItems">
                        {/* <NavigationItem to="/" exact>Dishes</NavigationItem> */}
                        <NavigationItem to="/" >Dishes</NavigationItem>
                        <span className="line">|</span>
                        <NavigationItem to="/product/orders" >Orders</NavigationItem>
                </ul>
            </div>
        </>
    )
};

export default NavigationItems;
