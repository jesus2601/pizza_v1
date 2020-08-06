import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Historial from './views/History';
import Favorites from './views/Favorites';
import Top from './views/Top';
import Offers from './views/Offers';
import AddPizza from "./views/FormPizza";
import Contacto from "./views/Contacto";
import Preguntas from './views/Preguntas';

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
            <Switch>
                <Route exact path="/Pizza" component={AddPizza} />
            </Switch>
            <Switch>
                <Route exact path="/Contacto" component={Contacto} />
            </Switch>
            <Switch>
                <Route exact path="/Contactanos" component={Preguntas} />
            </Switch>
        </BrowserRouter> 
    );
}

export default Routes;