import React from "react";
import Nav from "../../components/nav.jsx";
import Home from "../../components/home.jsx";
import Explore from "../../components/explore.jsx";
import About from "../../components/about.jsx";
import Testimonials from "../../components/testimonials.jsx";
import Footer from "../../components/footer.jsx";
import { Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="p-4 w-[95vw] mx-auto md:w-[90vw] md:mx-auto">
        <Nav />
        <Home />
        <Explore />
        <About />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
