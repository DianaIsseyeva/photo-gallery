import React from "react";
import {NavLink} from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = props => {
    return(
        <li >
            <NavLink to={props.to} exact={props.exact} className="NavigationItem">
            {props.children}
            </NavLink>
        </li>
    );
};
  

export default NavigationItem;
