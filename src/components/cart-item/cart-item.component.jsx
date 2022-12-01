import React from 'react';
import './cart-item.style.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <h2> {name}</h2>
      <span> {quantity}</span>
    </div>
  );
};

export default CartItem;
