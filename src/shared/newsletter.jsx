export const Newsletter = () => {
  return (
    <section className="newsletter">
      <h5 className="newsletter__title">Subscribe to our Newsletter</h5>
      <form className="newsletter-form" action="#" method="get">
        <input
          className="newsletter-form__input"
          required
          type="email"
          id="email"
          name="email"
          placeholder="Your Email Address"
        />
        <button className="newsletter-form__btn" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
};
