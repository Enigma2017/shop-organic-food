export const OfferAboutUs = () => {
  return (
    <div className="offerAbout">

      <div className="offerAboutInfo">
        <div className="offerAboutInfo__title">About Us</div>
        <h2 className="offerAboutInfo__description">What We Offer for You</h2>
      </div>

      <div className="offerAboutCards">

        <a href="/" className="offerAboutCard">
          <div className="offerAboutCard__img"><img src="public/about/spicy.png" alt="yellow spicy peper" /></div>
          <div className="offerAboutCard__title">Spicy</div>
        </a>

        <a href="/" className="offerAboutCard">
          <div className="offerAboutCard__img"><img src="public/about/nuts.png" alt="nuts" /></div>
          <div className="offerAboutCard__title">Nuts & Feesd</div>
        </a>

        <a href="/" className="offerAboutCard">
          <div className="offerAboutCard__img"><img src="public/about/granat.png" alt="red granat" /></div>
          <div className="offerAboutCard__title">Fruits</div>
        </a>

        <a href="/" className="offerAboutCard">
          <div className="offerAboutCard__img"><img src="public/about/vegetable.png" alt="ginger" /></div>
          <div className="offerAboutCard__title">Vegetable</div>
        </a>

      </div>
    </div>
  )
}
