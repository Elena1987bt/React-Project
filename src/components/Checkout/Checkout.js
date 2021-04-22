import React from 'react';
import { Link } from 'react-router-dom';
import SingleCartItem from '../../components/Cart/SingleCartItem/SingleCartItem';
import { useAppContext } from '../../context/context';
import './Checkout.css';

const Checkout = () => {
  const [{ cart }] = useAppContext();
  return (
    <div className="payment">
      <div className="container">
        <h2>
          Checkout (<Link to="/cart">{cart.length}</Link>)
        </h2>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>user@user.com</p>
            <p>123 Dream Street</p>
            <p>Dream City, Sweden</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((cartItem) => (
              <SingleCartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <div className="payment__priceContainer">
                <h3>Order Total: $250</h3>
                <button className="checkout__btn">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
