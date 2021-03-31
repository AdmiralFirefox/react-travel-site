import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Services from './services';
import Products from './products';
import SignUp from './signup';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/signup" component={SignUp} />
    </Switch>
)

export default Routing;