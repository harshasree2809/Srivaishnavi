import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Branches from "./Branches";
import Contact from "./Contact";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.hash]);

  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="branches">
        <Branches />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
