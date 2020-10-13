import React from 'react';
import './App.css';
import HomePage from "./pages/homepage.components/homepage.component";
import {Route} from "react-router-dom";
import shopPage from "./pages/shop/shop.components";


function App() {
  return (
    <div>
   
    <Route exact path= '/' component= {HomePage} />
    <Route exact path = '/shop' component= {shopPage}   />

    
    </div>
  );
}

export default App;
