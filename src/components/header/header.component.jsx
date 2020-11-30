import React from "react";
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";
import  {ReactComponent as Logo} from "../../assets/crown.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {HeaderContainer, OptionsContainer, OptionLink, LogoContainer} from "./header.styles.jsx";

const Header=({currentUser, hidden}) =>(
    <HeaderContainer>
    
    <LogoContainer to="/">
        <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>

        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>

        {
            currentUser ?
            (<OptionLink as="div" onClick ={()=> auth.signOut()}>SIGN OUT</OptionLink>)
            :
            (<OptionLink to= "/signin">SIGN IN</OptionLink>)
        }

        <CartIcon />
    </OptionsContainer>
    {
        !hidden ? 
        <CartDropdown /> 
        : null
    }
   
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
// ^^ same thing using createStructuredSelector library
// const mapStateToProps =  (state) => ({
// currentUser : selectCurrentUser(state),
// hidden: selectCartHidden(state)

// });





export default connect(mapStateToProps)(Header);
