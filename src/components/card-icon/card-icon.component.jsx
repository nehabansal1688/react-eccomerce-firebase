import React from 'react';
import SVG from 'react-inlinesvg';
import './card-icon.style.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <SVG
        className="shopping-icon"
        src={require('../../assets/shopping-bag.svg')}
        width={30}
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
