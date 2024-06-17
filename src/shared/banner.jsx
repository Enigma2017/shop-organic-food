/* eslint-disable react/prop-types */
export const CommonBanner = ({ imgSrc, altText }) => {
    return (
      <div className="commonbanner">
        <img src={imgSrc} alt={altText} />
      </div>
    )
  }
  