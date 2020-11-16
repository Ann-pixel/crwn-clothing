import React from 'react';
import './App.css';
import HomePage from "./pages/homepage.components/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import "./components/header/header.component";
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from  "./firebase/firebase.utils";

class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser :null
  };
}

  unsubscribeFromAuth =null;

componentDidMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log(user);
  });
}
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
      <Header currentUser ={this.state.currentUser}/> 
      <Switch>
      <Route exact path= '/' component= {HomePage} />
      <Route exact path = '/shop' component= {ShopPage}   />
      <Route exact path = '/signin' component= {SignInAndSignUpPage} />
  
      </Switch>
      
      </div>
    );
  }

 
}

export default App;
