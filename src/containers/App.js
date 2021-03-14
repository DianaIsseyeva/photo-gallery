import {Route, Switch} from 'react-router-dom';

import '../App.css';
import Menu from '../components/Layout/Menu/Menu';
import AddProductForm from "../components/Layout/AddProductForm/AddProductForm";
import Edit from "../components/Layout/Edit/Edit";
import Layout from '../components/Layout/Layout'

function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/product/admin" component = {AddProductForm} exact/>
            <Route path="/" component = {Menu} exact/>
            {/* <Route path="/current-product" component = {CurrentProduct} exact /> */}
            <Route path="/current-product/edit" component = {Edit} exact/>
            {/* <Route path="/product/orders" component = {Cart} exact/> */}
            {/* <Route exact
            render={() => <h3>Please select a topic.</h3>}
            /> */}
        </Switch>
    </Layout>
  );
}

export default App;
