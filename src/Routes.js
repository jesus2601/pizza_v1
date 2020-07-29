import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Historial from './views/History';
import Favorites from './views/Favorites';
import Top from './views/Top';
import Offers from './views/Offers';


const Routes =() => {
    return(
        <BrowserRouter> 
            <Switch>
                <Route exact path="/Inicio" component={Home} />
            </Switch>
            <Switch>
                <Route exact path="/Login" component={SignIn} />
            </Switch>
            <Switch>
                <Route exact path="/Registro" component={SignUp} />
            </Switch>
            <Switch>
                <Route exact path="/Favoritos" component={Favorites} />
            </Switch>
            <Switch>
                <Route exact path="/Top" component={Top} />
            </Switch>
            <Switch>
                <Route exact path="/Historial" component={Historial} />
            </Switch>
            <Switch>
                <Route exact path="/Ofertas" component={Offers} />
            </Switch>
        </BrowserRouter> 
    );
}

export default Routes;