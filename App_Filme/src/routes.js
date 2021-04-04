import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';



const Routes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route path="*" component={Erro}/>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;