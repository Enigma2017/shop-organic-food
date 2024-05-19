import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../pages/landing/landing-main";
import { AboutUsPage } from "../pages/about-us/aboutus-main";
import { PageNotFound } from "../pages/utility_pages/404";

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<Landing />} />
          <Route index={true} path="/aboutus" element={<AboutUsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    )
  }
  