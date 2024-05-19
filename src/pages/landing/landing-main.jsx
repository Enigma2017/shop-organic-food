import { AboutUsLanding } from "./about_us"; 
import { DiscountLanding } from "./discount";
import { EcoFriendlyLanding } from "./eco_friendly";
import { HeroLanding } from "./hero";
import { NewsLanding } from "./news";
import { OfferLanding } from "./offer";
import { OrganicLanding } from "./organic_juice";
import { ProductsLanding } from "./products";
import { TestimonalLanding } from "./testimonal";
import { Newsletter } from "../../shared/newsletter";

export const Landing = () => {
    return (
    <div className="landing">
        <HeroLanding />
        <DiscountLanding />
        <AboutUsLanding />
        <ProductsLanding />
        <TestimonalLanding />
        <OfferLanding />
        <EcoFriendlyLanding />
        <OrganicLanding />
        <NewsLanding />
        <Newsletter />
    </div>
    );
  }