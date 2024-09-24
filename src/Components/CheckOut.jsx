import { useStore } from '../useStore'; // Zustand
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
  const cartItems = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const navigate = useNavigate();

  // Handle form submission and order confirmation
  const handleCheckout = (e) => {
    e.preventDefault();

    // Check if form is filled out
    if (customerName && address) {
      alert('Order confirmed! Thank you for your purchase.');

      // Clear the cart after successful order
      clearCart();

      // Reset form fields
      setCustomerName('');
      setAddress('');
      setPaymentMethod('creditCard');

      // Navigate to another page or home
      navigate('/shop');
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-details">
        <h2>Order Summary</h2>
        <table className="order-summary-table">
          
          
            {cartItems.map((item) => (
              <div key={item.id} className='sheko'>
                <div className="item"><h3>Product</h3><p className='pro-title'>{item.title}</p></div>
                <div className="item"><h3>Price</h3><p>{item.price}$</p></div>
                <div className="item"><h3>Quantity</h3><p>{item.quantity}</p></div>
                <div className="item"><h3>Subtotal</h3><p>{(item.price * item.quantity).toFixed(2)}$</p></div>
              </div>
            ))}
         
        </table>
        <div className="total-amount">
          <h2>Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}$</h2>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleCheckout}>
        <h2>Customer Information</h2>

        <label>
          Name : <br />
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>

        <label>
          Address : <br />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        <label>
          Payment Method : <br />
          <select
          className='selection'
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </label>

        <button type="submit" className="confirm-order-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;