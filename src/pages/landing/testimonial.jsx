import { Star } from "../../../public/assets/img/testimonial/Star";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export const TestimonialLanding = () => {
  const reviews = [
    {
      photo: "/public/assets/img/testimonial/reviewer.png",
      name: "Sara Taylor",
      occupation: "Consumer",
      desc: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
  ];

  return (
    <section className="testimonial">
      <p className="testimonial__pretitle">Testimonial</p>
      <h2 className="testimonial__title">What Our Customers Are Saying?</h2>

      <div className="owl-carousel owl-theme">
        <div className="reviewer">
          {reviews.map((review, index) => (
            <div key={index}>
              <img src={review.photo} alt="" className="reviewer__img" />
              <div className="reviewer__rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="reviewer__desc">{review.desc}</p>
              <h3 className="reviewer__name">{review.name}</h3>
              <p className="reviewer__occupation">{review.occupation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial__separator"></div>

      <div className="testimonial__group">
        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">100%</h2>
                <p className="testimonial__rating-desc">Organic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">285</h2>
                <p className="testimonial__rating-desc">Active Product</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">350+</h2>
                <p className="testimonial__rating-desc">Organic Orchads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-container">
          <div className="outer-circle">
            <div className="inner-circle">
              <div className="testimonial__rating">
                <h2 className="testimonial__rating-num">25+</h2>
                <p className="testimonial__rating-desc">Years of Farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
