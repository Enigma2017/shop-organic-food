import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageNotFound } from "../pages/utility_pages/404";

import { TeamPage } from "../pages/team/team-main";
import { Landing } from "../pages/landing/landing-main";
import { AboutUsPage } from "../pages/about-us/aboutus-main";
import { ShopPage } from "../pages/shop/shop-main";
import { ShopItem } from "../pages/shop/shop_item";
import { CartPage } from "../pages/cart/cart-main";
import { ServicePage } from "../pages/services/service-main";
import { QualityStandartPage } from "../pages/quality-stan/quality_stan-main";
import { ContactUsPage } from "../pages/contact/contact-main";
import { Header } from "../shared/header";
import { Footer } from "../shared/footer";

export const AppRoutes = () => {
    return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route index={true} path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/shop-item/:id" element={<ShopItem />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/quality" element={<QualityStandartPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    )
  }
  