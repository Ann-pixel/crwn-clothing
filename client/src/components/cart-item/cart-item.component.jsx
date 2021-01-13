import React from "react";

import CartItemStyles from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyles>
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {" "}
        {quantity} x ${price}
      </span>
    </div>
  </CartItemStyles>
);
export default React.memo(CartItem);
