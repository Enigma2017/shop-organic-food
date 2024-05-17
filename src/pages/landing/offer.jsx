export const OfferLanding = () => {
  return (
    <div className="offerLanding">

      <div className="offerText">
        <p className="offerText__title">Offer</p>
        <h2 className="offerText__desc">We Offer Organic For You</h2>
        <a href="/" className="offerText__btn">View All Product</a>
      </div>

      <div className="offerCards">
        <div className="offerCards__card">
          <div className="offerCards__img"></div>
          <div className="offerCards__price"></div>
        </div>
      </div>
    </div>
  );
}