import DiscountImage1 from '/discount-image1.png'
import DiscountImage2 from '/discount-image2.png'

export const DiscountLanding = () => {
    return (
      <section className='discount'>
          <div className="discount__image-block">
            <img src={DiscountImage1} alt="discount-image"/> 
            <div className="discount__image-block-text discount-text-block1">
              <span>Natural!!</span>
              <p>Get Garden Fresh Fruits</p>
            </div>
          </div>
          <div className="discount__image-block">
            <img src={DiscountImage2} alt="discount-image"/> 
            <div className="discount__image-block-text discount-text-block2">
              <span>Offer!!</span>
              <p>Get 10% off <br /> on Vegetables</p>
            </div>
          </div>
          
      </section>
    );
  }