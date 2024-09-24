import Warranty from '../../public/assets/guarantee.png'
import Shipping from '../../public/assets/shipping.png'
import Support from '../../public/assets/customer-support.png'
import Quality from '../../public/assets/trophy 1.png';
function Section() {
    return (
        <div className="Section">
        <div className="Section-info">
          <div className="feature">
            <div><img src={Quality} alt="" /></div>
            <div className="detail">
            <p> High Quality</p>
            <span>crafted from top materials</span>
            </div>
          </div>
          <div className="feature">
          <div><img src={Warranty} alt="" /></div>
            <div className="detail">
            <p> Warranty Protection</p>
            <span>Over 2 years</span>
            </div>
          </div>
          <div className="feature">
          <div><img src={Shipping} alt="" /></div>
            <div className="detail">
            <p> Free Shipping</p>
            <span>Order over 150 $</span>
            </div>
          </div>
          
          <div className="feature">
          <div><img src={Support} alt="" /></div>
            <div className="detail">
            <p> 24/7 Support</p>
            <span>Dedicated support</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Section;