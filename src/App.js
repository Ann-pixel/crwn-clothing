import React from 'react';
import './App.css';
import HomePage from "./pages/homepage.components/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import "./components/header/header.component";
import Header from './components/header/header.component';

function App() {
  return (
    <div>
    <Header /> 
    <Switch>
    <Route exact path= '/' component= {HomePage} />
    <Route exact path = '/shop' component= {ShopPage}   />
    </Switch>
    
    </div>
  );
}

export default App;
