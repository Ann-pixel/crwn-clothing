import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { GlobalStyle } from "./global.styles";
import { Route, Switch, Redirect } from "react-router-dom";
import "./components/header/header.component";
import Header from "./components/header/header.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(() =>
  import("./pages/homepage.components/homepage.component")
);

const ShopPage = lazy(() => import("./pages/shop/shop.components"));

const CheckoutPage = lazy(() =>
  import("./pages/check-out/check-out.component")
);
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />

          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
