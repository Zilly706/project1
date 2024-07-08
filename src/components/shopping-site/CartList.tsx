import React, { useState } from 'react';

interface CartItem {
  quantity: number;
  name: string;
  url: string;
  price: number;
}

function CartList({ cart }: { cart: CartItem[] }) {

  const [cart1, setCart1] = useState(cart);

  const handleIncrement = (item: CartItem) => {
    const newCart = cart1.map(cartItem =>
      cartItem.name === item.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart1(newCart);
  };

  const handleDecrement = (item: CartItem) => {
    if (item.quantity === 1) {
      const newCart = cart1.filter(cartItem => cartItem.name !== item.name);
      setCart1(newCart);
    } else {
      const newCart = cart1.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart1(newCart);
    }
  };

  return (
    <div>
      {cart1.map((cartItem, cartIndex) => (
        <div key={cartIndex} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={cartItem.url} alt="not found" width={90} style={{ marginRight: '10px' }} />
          <span>{cartItem.name}</span>
          <button onClick={() => handleIncrement(cartItem)} style={{ margin: '0 5px' }}>+</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => handleDecrement(cartItem)} style={{ margin: '0 5px' }}>-</button>
          <span style={{ marginLeft: '10px' }}>Rs. {cartItem.price} /-</span>
        </div>
      ))}
      <br />
      <p>
        <b>Total Amount : </b>
        {cart1.reduce((total, item) => total + item.quantity * item.price, 0)}
      </p>
    </div>
  );
}

export default CartList;