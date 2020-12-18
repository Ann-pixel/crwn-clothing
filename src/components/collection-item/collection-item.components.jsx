import React from "react";

import  CustomButton from "../custom-button/custom-button.component"
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions"
import CollectionItemStyled from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
    const { price, name, imageUrl} =item;
    return (
        <CollectionItemStyled>
        <div className= "image" style ={{backgroundImage: `url(${imageUrl})`}} />         
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className= "price">{price}</span>
        </div>
        <CustomButton className="custom-button" onClick = {()=>addItem(item)} inverted>Add to Cart</CustomButton>
        </CollectionItemStyled>

)};

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);