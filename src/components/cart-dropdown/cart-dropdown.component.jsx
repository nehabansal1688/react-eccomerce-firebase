import React, { useContext } from 'react';
import Button from '../button/button.component';
import './cart-dropdown.style.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button> Go to checkkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
