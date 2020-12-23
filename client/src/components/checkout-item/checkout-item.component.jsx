import React from "react";

import CheckoutItemStyled from "./checkout-item.styles";
import {connect} from "react-redux";
import {removeItem, addItem, substractItem} from "../../redux/cart/cart.actions";

const CheckoutItem =({cartItem, removeItem,addItem, substractItem}) =>{
 
    const {price, name, quantity, imageUrl} = cartItem;
    return (  
    <CheckoutItemStyled>
    <div className="image-container">
    <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
        <div  className="arrow" onClick= {() => substractItem(cartItem)}>&#10094;</div>   
        <span className="value">{quantity}</span>
        <div className="arrow"  onClick= {() => addItem(cartItem)}>&#10095;</div> 
    </span> 

    <span className="price">{price}</span>
  
    <div className="remove-button" onClick= {()=> removeItem(cartItem)}>
        &#10005;
    </div>
    </CheckoutItemStyled>)
};


const mapDispatchToProps = dispatch => ({

    removeItem: item => (dispatch(removeItem(item))),
    addItem: item => (dispatch(addItem(item))),
    substractItem: item => (dispatch(substractItem(item)))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);










