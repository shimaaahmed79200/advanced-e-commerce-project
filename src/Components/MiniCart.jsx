
import { useStore } from '../useStore';
import { Link } from 'react-router-dom';
import close from '../../public/assets/Group.png';
import remove from '../../public/assets/remove.png';
const MiniCart = () => {
  const { cart, isCartVisible, setIsCartVisible, removeFromCart } = useStore();


  if (!isCartVisible) return null;

  const handleHide = () => setIsCartVisible(false);

  return (
    <div className="cart-popup">
      
      <div className="cart-popup-header">
        <h2>Shopping Cart</h2>
        <button onClick={handleHide} className="close-btn"><img src={close} alt="" /></button>
      </div>

        
        <div className='high'>
          {cart.map((item) => (
            <div key={item.id}>
              <div  className='table'>
              <div>
                <img src={item.image} alt={item.title} className="cart-item-image"/>
              </div>
              <div className="info-pro">
              <div><p>{item.title}</p></div>
              
              </div>
              <div className="">
              <div>{item.quantity}</div>
              <div className='price'>Rs.{item.price}</div>
              </div>
              <div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn"><img src={remove} alt="" /></button>
              </div>
              </div>
            </div>
          ))}
        </div>
          <div className="cart-popup-footer">
            {/* <div>${(item.price * item.quantity).toFixed(2)}</div> */}
              <div className='sub'><p >subtotal</p><p className='colo'>Rs. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p></div><hr />
              <button className="cart-btn"><Link to="/Cart">Cart</Link></button>
            </div>
        
      
    </div>
  );
};

export default MiniCart;