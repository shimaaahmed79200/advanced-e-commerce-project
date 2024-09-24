import Categories from "../Components/Categories";
import Main from '../../public/assets/scandinavian-interior-mockup-wall-decal-background 1.png'
import Section from "../Components/Section";
const Home = () => {
  return (
    <>
    <img src={Main} alt=""className='bg' />
    <div className="home">
      
      <Categories/>
      <Section/>
    </div>
    </>
  );
};

export default Home;