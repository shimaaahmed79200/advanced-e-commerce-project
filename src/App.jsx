import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Checkout from './Components/CheckOut';
import MiniCart from './Components/MiniCart';
// import Breadcrumb from './Components/Breadcrumb';
function App() {
  // const breadcrumbPaths = [
  //   { name: 'Home', link: '/' },
  //   { name: 'Shop', link: '/shop' },
  //   { name: 'Cart', link: '/cart' },
  //   { name: 'Contact', link: '/contact' },
  //   { name: 'end', link: '/checkout' },
  // ];

  return(
    <Router>
    <Navbar />
    {/* <Breadcrumb paths={breadcrumbPaths}/> */}
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkOut" element={<Checkout />} />
        <Route path="/MiniCart" element={<MiniCart />} />
      </Routes>
    </div>
    
    <Footer />
  </Router>

  );
  
}

export default App;


