import React from 'react';
import './Toolbar.css';
import NavigationItems from '../../Layout/Navigation/NavigationItems';


const Toolbar = () => {
    return(
        <header className="Toolbar">
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default Toolbar;
