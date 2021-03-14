import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import reducerProducts from "./store/reducers/reducerProducts";
import reportWebVitals from './reportWebVitals';
import reducerCart from './store/reducers/reducerCart';

const rootReducer = combineReducers({
    menu: reducerProducts, 
    cart: reducerCart
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const app = (
  <Provider store={store}>
       <BrowserRouter>
            <App />
       </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
