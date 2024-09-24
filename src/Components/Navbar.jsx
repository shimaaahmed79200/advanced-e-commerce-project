import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../useStore';
import CartImage from '../../public/assets/ant-design_shopping-cart-outlined.svg';
import Logo from '../../public/assets/Meubel House_Logos-05.svg';
import Furno from '../../public/assets/SkinClinic.png';
import MiniCart from './MiniCart';

const Navbar = () => {
  const { setIsCartVisible } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu collapse

  const handleShowCart = () => setIsCartVisible(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu state

  return (
    <nav className="navbar">
      <div className="logo">
        <div><img src={Logo} alt="Logo" /></div>
        <div><img src={Furno} alt="Furno" /></div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon for small screens */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li>
          <button onClick={handleShowCart} className='Shopping-Cart'>
            <p></p>
            <img src={CartImage} alt="Cart" />
          </button>
          <MiniCart />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;