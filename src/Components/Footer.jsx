import { Link } from "react-router-dom";
import { useState } from "react";
import CartImage from '../../public/assets/ant-design_shopping-cart-outlined.svg'
import Furnio from '../../public/assets/Funiro..png'
const Footer = () => {
    // Use the default store hook and extract the needed state/actions
      const [formValues, setFormValues] = useState({
        
        email: '',
        
      });
    
      const [errors, setErrors] = useState({
        
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Simple validation
        let valid = true;
        const newErrors = {};
    
        
        if (!formValues.email.trim()) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
          newErrors.email = 'Email address is invalid';
          valid = false;
        }
        
        
    
        setErrors(newErrors);
    
        if (valid) {
          alert('Form submitted successfully!');
          console.log(formValues);
          // Optionally, clear form fields or perform further actions
          setFormValues({
            
            email: '',
            
          });
        }
      };
    return (
      <footer className="footer">
        <div className="footer-bottom">
          <div className="footer-section">
            <img src={Furnio} alt=""  className="Furniro"/>
            <address>
              400 University Drive Suite 200 Coral Gables,<br/> FL 33134 USA
            </address>
          </div>
  
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Cart"><img src={CartImage} alt="" /></Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form onSubmit={handleSubmit}>
          

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <button type="subscribe">subscribe</button>
        </form> 
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;