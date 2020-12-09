import React from 'react';
import {connect} from "react-redux";
import './App.css';
import HomePage from "./pages/homepage.components/homepage.component";
import {Route, Switch, Redirect} from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import "./components/header/header.component";
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import  {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/check-out/check-out.component";



class App extends React.Component {
  unsubscribeFromAuth =null;
componentDidMount(){


  // this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
  //   if(userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
      
  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //     });
  //   }   
  //   setCurrentUser(userAuth);
  // });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}
  render(){
    return (
      <div>
      <Header /> 
      <Switch>
      <Route exact path= '/' component= {HomePage} />
      <Route path = '/shop' component= {ShopPage}   />
      <Route exact path = '/signin' render=  {()=> this.props.currentUser ? (<Redirect to= "/" />) : (<SignInAndSignUpPage />)}  />
      <Route exact path = '/checkout' component= {CheckoutPage} />
      </Switch>      
      </div>
    );
  }
}
const mapStateToProps= createStructuredSelector ({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
