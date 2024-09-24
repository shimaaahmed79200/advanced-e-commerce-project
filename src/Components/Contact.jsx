import Breadcrumb from './Breadcrumb';
import  { useState } from 'react';
import Logo from '../../public/assets/Meubel House_Logos-05.svg';
import phone from '../../public/assets/bxs_phone.png'
import location  from '../../public/assets/location.png'
import clock  from '../../public/assets/bi_clock-fill.png'

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({
        ...errors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let valid = true;
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formValues.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert('Form submitted successfully!');
      console.log(formValues);
      // Optionally, clear form fields or perform further actions
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };
  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'Contact', link: '/contact' },
    
  ];

  return (
    <>
      <div className="breadcrumb-div">
      <img src={Logo} alt="" className='logo-img'/>
        <h1>Contact</h1>
      <Breadcrumb paths={breadcrumbPaths}/>
      </div>
      
      <div className="contact-container">
        <h1>Get in Touch With Us</h1>
        <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="contact-details">
          <div className="details-1">
            <div className="location">
            <div><img src={location} alt="" /></div>
              <div className="address">
                <h3>Address</h3>
                <p>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
              </div>
            </div>
            {/* ------------------- */}
            <div className="location">
              <div><img src={phone} alt="" /></div>
              
              <div className="address">
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789 <br />Hotline: +(84) 456-6789 </p>
                
              </div>
            </div>
            {/* -------------------- */}
            <div className="location">
            <div><img src={clock} alt="" /></div>
              <div className="address">
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
            
          </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.subject && <div className="error">{errors.subject}</div>}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>

          <button type="submit">Submit</button>
        </form> 
        </div>
        
      </div>
    </>
  );
};

export default Contact;