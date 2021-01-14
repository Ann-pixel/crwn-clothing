import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import CheckOutPage from "./check-out.styles";


const CheckoutPage = ({cartItems, total}) => (
    <CheckOutPage>
        <div className="checkout-header">
        <div className="header-blocks">
        <span>Product</span>
        </div>
        <div className="header-blocks">
        <span>Description</span>
        </div>
        <div className="header-blocks">
        <span>Quantity</span>
        </div>
        <div className="header-blocks">
        <span>Price</span>
        </div>
        <div className="header-blocks">
        <span>Remove</span>
        </div>
        </div>
        {
            cartItems.map(cartItem =>
             <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }

        <div className="total">
            <span>TOTAL: {total}</span>
        </div>
        <div className ="test-warning">
            *please use the following test credit card for test payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>

        <StripeCheckoutButton  price={total} />
        </CheckOutPage>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);
