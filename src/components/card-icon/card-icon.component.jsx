import React, { useContext } from 'react';
import SVG from 'react-inlinesvg';
import './card-icon.style.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartClickHandler = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={cartClickHandler}>
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
