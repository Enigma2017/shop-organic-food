import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageNotFound } from "../pages/utility_pages/404";

import { TeamPage } from "../pages/team/team-main";
import { Landing } from "../pages/landing/landing-main";
import { AboutUsPage } from "../pages/about-us/aboutus-main";

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<Landing />} />
          <Route index={true} path="/aboutus" element={<AboutUsPage />} />
          <Route index={true} path="/team" element={<TeamPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    )
  }
  