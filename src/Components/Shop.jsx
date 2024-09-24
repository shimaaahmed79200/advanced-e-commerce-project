import { useEffect, useState } from 'react';
import { useStore } from '../useStore';
import Section from '../Components/Section';
import Logo from '../../public/assets/Meubel House_Logos-05.svg';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const Shop = () => {
  const { products, setProducts, selectedCategory, addToCart, cart } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of items per page
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  useEffect(() => {
    // Update cart items whenever the cart changes
    setCartItems(cart);
  }, [cart]);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        if (selectedCategory === 'Women') return product.category === "women's clothing";
        if (selectedCategory === 'Men') return product.category === "men's clothing";
        if (selectedCategory === 'Accessories') return product.category === 'jewelery';
        if (selectedCategory === 'Electronics') return product.category === 'electronics';
        return false;
      })
    : products;

  // Paginate products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(product);
    
    setCartItems(cart); // Update cart items
    setShowCartDetails(true);
    setTimeout(() => setShowCartDetails(false), 3000); // Hide details after 3 seconds
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
  ];

  return (
    <>
      <div className="breadcrumb-div">
        <img src={Logo} alt="" className='logo-img'/>
        <h1>Shop</h1>
      <Breadcrumb paths={breadcrumbPaths}/>
      </div>
      <div className="shop">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div className="product-card " key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                onClick={() => handleImageClick(product.id)}
              />
              <div
                className="cart-button "
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {!selectedCategory && totalPages > 1 && (
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Prev
            </button>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber + 1}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={pageNumber + 1 === currentPage ? 'active' : ''}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Section />
      {showCartDetails && (
        <div className="cart-details">
          <h3>Added</h3>
          <div className="cart-totals">
            <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;