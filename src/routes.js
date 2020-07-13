import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';
import Cadastrar from './Pages/Cadastrar/index';
import Acompanhar from './Pages/Acompanhar/index';
import Edit from './Pages/Edit/index';


import { isAuthenticated } from './Services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? 
            (
                <Component {...props} />
            ) : 
            (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/cadastrar" component={Cadastrar} />
            <PrivateRoute path="/acompanhar" component={Acompanhar} />
            <PrivateRoute path="/edit" component={Edit} />
        </Switch>
    </BrowserRouter>
);

export default Routes;