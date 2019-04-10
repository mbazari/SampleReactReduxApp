import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {  Route, Switch,Redirect,HashRouter } from "react-router-dom";
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.css'
import './css/sidebar.css'
import Sidebar from './Component/Sidebar';
import Login from './Component/Login';
import Reports from './Component/Reports';
import configureStore from './Stores/configureStore'
import defaultState from './Stores/defaultState'
import NotFound from './Component/NotFound';
const Store=configureStore(defaultState)
render(
    <Provider store={Store}>
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/NotFound" component={NotFound}  />
            <Route path="" exact component={App} />
            <Redirect to="/NotFound"></Redirect>
        </Switch>
    </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();