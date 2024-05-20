import { Newsletter } from "../../shared/newsletter"
import { CommonBanner } from "../../shared/banner"
import QualityBanner from "/banners/quality-bg.jpg"

export const QualityStandartPage = () => {
    return (
      <div className="quality_standart-page">
        <CommonBanner imgSrc={QualityBanner} altText={'QualityBanner'}/>
        quality standart
        <Newsletter/>
      </div>
    )
  }
  