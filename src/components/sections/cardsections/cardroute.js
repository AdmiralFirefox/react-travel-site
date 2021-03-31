import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CardCamping from './camping';
import CardHiking from './hiking';
import CardHotSpring from './hotspring';
import CardDine from './dine';
import CardDive from './dive';

const CardRoute = () => (
    <Switch>
        <Route path="/camping" component={CardCamping} />
        <Route path="/hiking" component={CardHiking} />
        <Route path="/hotspring" component={CardHotSpring} />
        <Route path="/dine" component={CardDine} />
        <Route path="/dive" component={CardDive} />
    </Switch>
)

export default CardRoute;