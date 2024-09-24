
import Section from "./Section";
import Remove from '../../public/assets/remove.svg'
import { useStore } from '../useStore'; 
import { useNavigate } from 'react-router-dom';
import Logo from '../../public/assets/Meubel House_Logos-05.svg';
import Breadcrumb from './Breadcrumb';


const Cart = () => {
  const cartItems = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);


  const navigate = useNavigate(); 

  // Function to handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      
      navigate('/checkout');
    }
  };
  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'Cart', link: '/cart' },
  ];

  return (
    <>
      <div className="breadcrumb-div">
      <img src={Logo} alt="" className='logo-img'/>
        <h1>Cart</h1>
      <Breadcrumb paths={breadcrumbPaths}/>
      </div>
      <div className="cart-page">
          <div className="cart-table">
            <div className="header">
              <div></div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
            {cartItems.map((item) => (
            <div key={item.id} className="pro-det">
                <div className="pro-img">
                  <img src={item.image} alt={item.title} />
                  </div>
                <p>{item.title}</p>
                <div><p>{item.price}$</p></div>
                <div><h5 className="quantity">{item.quantity}</h5></div>
                
                <div className="subtotal"><p >Rs. {(item.price * item.quantity).toFixed(2)}$</p></div>
                <div>
                  <button onClick={() => removeFromCart(item.id)} className="remove"><img src={Remove} alt="Remove" /></button>
                </div>
            </div>
            ))}
          </div>
        
        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <div className="total">
          <span>Total</span>
          <p>{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}$</p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout} >Check Out</button>
        </div>
        </div>
      <Section/>
    </>
  );
};

export default Cart;