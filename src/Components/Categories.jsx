import { useNavigate } from 'react-router-dom';
import { useStore } from '../useStore'; // Zustand store
import woman from '../../public/assets/girl.jpg'
import man from '../../public/assets/depositphotos_26043279-stock-photo-retro-fifties-summer-fashion-man.jpg'
import jewellery from  '../../public/assets/jewelry.jpeg'
import electron from '../../public/assets/electronic.jpg' 
const categories = [
  { id: 1, name: 'Women', image: woman},
  { id: 2, name: 'Men', image: man },
  { id: 3, name: 'Accessories', image: jewellery },
  { id: 4, name: 'Electronics', image: electron }
];

const Categories = () => {
  const { setSelectedCategory } = useStore(); // Zustand store
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name); // Set selected category in Zustand
    navigate('/shop', { state: { category: category.name } }); // Pass the selected category using state
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category"
          onClick={() => handleCategoryClick(category)}
        >
          <img src={category.image} alt={category.name} />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;