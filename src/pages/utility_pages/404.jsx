import Arrow from "/about/arrow.svg"
import Error from "/public/404/error.png"
// import Pattern from "/public/404/patterns.svg"
// import Pattern1 from "/public/404/patterns1.svg"
// import Pattern2 from "/public/404/patterns2.svg"
// import Pattern3 from "/public/404/patterns3.svg"

export const PageNotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <div className="notfound__info">
          <div className="notfound__slogan">
            <img src={Error} alt="Error" />
          </div>
          <div className="notfound__title">Page not found</div>
          <div className="notfound__desc">
            The page you are looking for doesn&#39;t exist or has been moved
          </div>
          <a className="notfound__a" type="submit" href="/">
            Go to Homepage <img src={Arrow} alt="arrow" />
          </a>
        </div>
        {/* <div className="notfound__patterns">
          <img src={Pattern} alt="Pattern" />
        </div>
        <div className="notfound__patterns1">
          <img src={Pattern1} alt="Pattern" />
        </div>
        <div className="notfound__patterns2">
          <img src={Pattern2} alt="Pattern" />
        </div>
        <div className="notfound__patterns3">
          <img src={Pattern3} alt="Pattern" />
        </div> */}
      </div>
    </section>
  )
}
