import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/nav";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Branches from "./pages/Branches";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;