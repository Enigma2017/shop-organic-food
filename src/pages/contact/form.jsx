export const FormContactUs = () => {
  return (

    <section className="contact__form">
    <form className="form">
      <div className="form__group">
        <label htmlFor="" className="field">
          <div className="field__title">Full Name*</div>
          <input
            type="text"
            className="field__input"
            placeholder="Your Full Name"
          />
        </label>

        <label htmlFor="" className="field">
          <div className="field__title">Your Email*</div>
          <input
            type="text"
            className="field__input"
            placeholder="example@yourmail.com"
          />
        </label>

        <label htmlFor="" className="field">
          <div className="field__title">Company*</div>
          <input
            type="text"
            className="field__input"
            placeholder="Your company name here"
          />
        </label>

        <label htmlFor="" className="field">
          <div className="field__title">Subject*</div>
          <input
            type="text"
            className="field__input"
            placeholder="How can we help?"
          />
        </label>
      </div>

      <label htmlFor="" className="field">
        <div className="field__title">Message*</div>
        <textarea
          name=""
          id=""
          className="field__input field__textarea"
          placeholder="Hello there, I would like to talk about how to..."
        ></textarea>
      </label>

      <button className="form__button" type="submit">
        Send Message
      </button>
    </form>
    </section>
  );
};
