import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index';
import Register from './Pages/Register/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
);

export default Routes;