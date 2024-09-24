
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useStore } from '../useStore'; // Import Zustand store
// import Section from '../Components/Section';
// import Breadcrumb from './Breadcrumb';
// import star from '../../public/assets/dashicons_star-filled.png';
// import Facebook from '../../public/assets/facebook.png'
// import linkedin from '../../public/assets/linkedin.png'
// import twitter from '../../public/assets/teitter.png'
// const Product = () => {
//   const { id } = useParams(); // Get ID from the URL
//   const [product, setProduct] = useState(null); // Initial product state
//   const [loading, setLoading] = useState(true); // Track loading state

//   const addToCart = useStore((state) => state.addToCart); // Get addToCart action from Zustand
//   const incrementQuantity = useStore((state) => state.incrementQuantity);
//   const decrementQuantity = useStore((state) => state.decrementQuantity);
//   const quantity = useStore((state) => state.quantity[id] || 1); // Get the quantity from Zustand store
//   useEffect(() => {
//     // Fetch product data from API
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProduct(data);
//         setLoading(false); // Stop loading when data is fetched
//       })
//       .catch(() => {
//         setLoading(false); // Stop loading in case of error
//       });
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading text while fetching data
//   }

//   if (!product) {
//     return <div>Product not found.</div>; // Show error if product not found
//   }
//   const breadcrumbPaths = [
//     { name: 'Home', link: '/' },
//     { name: 'Shop', link: '/shop' },
//     { name:`${product.title}` , link: '/product' }
//   ];
//   return (
//     <>
//     <div className="bread"><Breadcrumb paths={breadcrumbPaths}/></div>
      
//       <div >
//       <div className="product-page">
//         <div className="image"><img src={product.image} alt={product.title} /></div>
//         <div className="details">
//         <h1>{product.title}</h1>
//         <span className='Pero'>Rs. {product.price}</span><br />
//         <p className='rate'>{product.rating.rate}</p><div className="stars"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></div><span className='review'>{product.rating.count} customer Review</span>
//         <p>{product.description}</p>
//         <div className="number">
//           <div className="inc">
//           <button onClick={() => incrementQuantity(product.id)} className='de'>+</button>
//           <p className="quant">{quantity}</p>
//           <button onClick={() => decrementQuantity(product.id)}className='de'>-</button>
//           </div>
        
//         <button onClick={() => addToCart(product)} className='add' >Add to Cart</button> 
//         </div>
//         <div className="foot">
//           <p>SKU <span>   : </span> SS001</p>
//           <p>Category <span> : </span> {product.category}</p>
//           <p>Tags <span> : Clothes , accessories , electronics , Shop , home </span> </p>
//           <div className="share">
//             <p>Share :</p>
//             <div><img src={Facebook} alt="" /></div>
//             <div><img src={linkedin} alt="" /></div>
//             <div><img src={twitter} alt="" /></div>
//           </div>
//         </div>
//         </div>
        
//         </div>
        
//       </div>
//       <div className='description' >
//       <h3>description</h3>
//       <p >Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
//         <br />
//       </p>
//       </div>
      
//       <Section />
//     </>
//   );
// };

// export default Product;






// ========================================================== 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../useStore'; // Import Zustand store
import Section from '../Components/Section';
import Breadcrumb from './Breadcrumb';
import star from '../../public/assets/dashicons_star-filled.png';
import Facebook from '../../public/assets/facebook.png';
import linkedin from '../../public/assets/linkedin.png';
import twitter from '../../public/assets/teitter.png';

const Product = () => {
  const { id } = useParams(); // Get ID from the URL
  const [product, setProduct] = useState(null); // Initial product state
  const [loading, setLoading] = useState(true); // Track loading state
  // const [quantity, setQuantity] = useState(1); // التحكم في الكمية محليًا

  // Get actions and state from Zustand
  const addToCart = useStore((state) => state.addToCart);
  const incrementQuantity = useStore((state) => state.incrementQuantity);
  const decrementQuantity = useStore((state) => state.decrementQuantity);
  const quantity = useStore((state) => state.quantity[id] || 1); // Get quantity for the current product


  useEffect(() => {
    // Fetch product data from API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(() => {
        setLoading(false); // Stop loading in case of error
      });
  }, [id]);

  // const incrementQuantity = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  const handleAddToCart = () => {
    addToCart(product, id); // Add product with its quantity to the cart
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching data
  }

  if (!product) {
    return <div>Product not found.</div>; // Show error if product not found
  }

  const breadcrumbPaths = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: product.title, link: `/product/${id}` },
  ];

  return (
    <>
      <div className="bread">
        <Breadcrumb paths={breadcrumbPaths} />
      </div>

      <div className="product-page">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details">
          <h1>{product.title}</h1>
          <span className="Pero">Rs. {product.price}</span>
          <br />
          <p className="rate">{product.rating.rate}</p>
          <div className="stars">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <span className="review">{product.rating.count} customer Review</span>
          <p>{product.description}</p>
          <div className="number">
            <div className="inc">
              <button onClick={() => incrementQuantity(id)} className="de">+</button>
              <p className="quant">{quantity}</p>
              <button onClick={() => decrementQuantity(id)} className="de">-</button>
            </div>
            {/* Pass the product and quantity to the addToCart function */}
            <button onClick={handleAddToCart} className="add">
              Add to Cart
            </button>
          </div>
          <div className="foot">
            <p>
              SKU <span>:</span> SS001
            </p>
            <p>
              Category <span>:</span> {product.category}
            </p>
            <p>
              Tags <span>:</span> Clothes, accessories, electronics, Shop, home
            </p>
            <div className="share">
              <p>Share :</p>
              <div>
                <img src={Facebook} alt="" />
              </div>
              <div>
                <img src={linkedin} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <h3>Description</h3>
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker
          takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the
          road...
        </p>
      </div>

      <Section />
    </>
  );
};

export default Product;