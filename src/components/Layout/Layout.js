import Toolbar from './Toolbar/Toolbar';
import './Layout.css';

const Layout = props => {
    return(
        <div className='Layout'>
            <Toolbar/>
            <main className="Layout-Content">
                {props.children}
            </main>
        </div>
    );
};

export default Layout;