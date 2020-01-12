import React from 'react';
// import axios from 'commons/axios'
// import { toast } from 'react-toastify';

const CartItem = () => {
  return (
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <span className="close">X</span>
      </div>
      <div className="column is-narrow">
        <img src="images/1.jpg" alt="" width="100"/>
      </div>
      <div className="column cart-name is-narrow">
        Test Product
      </div>
      <div className="column">
        <span className="price">432.00</span>
      </div>
      <div className="column">
        <input type="number" className="input num-input"/>
      </div>
      <div className="column">
        <span className="sum-price">432.00</span>
      </div>
    </div>
  )
}

export default CartItem;