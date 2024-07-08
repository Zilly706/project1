import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SingleItemCart: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; name: string; quantity: number }[]>([]);
  const item = { id: 1, name: 'Apple', image: 'apple.jpg' };

  const addItemToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = () => {
    setCart((prevCart) => {
      return prevCart
        .map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0);
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Item</h4>
          <div className="list-group">
            <div className="list-group-item d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              {item.name}
              <button onClick={addItemToCart} className="btn btn-primary btn-sm">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Cart</h4>
          <ul className="list-group">
            {cart.length === 0 ? (
              <li className="list-group-item">Cart is empty</li>
            ) : (
              cart.map(cartItem => (
                <li key={cartItem.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <img src={item.image} alt={cartItem.name} style={{ width: '50px', marginRight: '10px' }} />
                  {cartItem.name} (x{cartItem.quantity})
                  <button onClick={removeItemFromCart} className="btn btn-danger btn-sm">Remove</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleItemCart;
