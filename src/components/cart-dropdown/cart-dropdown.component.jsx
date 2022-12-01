import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import './cart-dropdown.style.scss';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => navigate('/checkkout');
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={gotoCheckoutHandler}> Go to checkkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
