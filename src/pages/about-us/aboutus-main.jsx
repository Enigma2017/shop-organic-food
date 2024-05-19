import { WhyUsAboutUs } from "./why_us"
import { AboutUsAboutUs } from "./about_us"
import { OfferAboutUs } from "./offer"
import { TeamAboutUs } from "./team"

export const AboutUsPage = () => {
  return (
    <div className="aboutus_page">
          <AboutUsAboutUs />
          <WhyUsAboutUs />
          <TeamAboutUs />
          <OfferAboutUs />
    </div>
  )
}
