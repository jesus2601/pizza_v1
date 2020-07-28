import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';


const Routes =() => {
    return(
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
                <Route exact path="/SignIn" component={SignIn} />
            </Switch>
            <Switch>
                <Route exact path="/SignUp" component={SignUp} />
            </Switch>
        </BrowserRouter> 
    );
}

export default Routes;