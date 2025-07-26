import React from "react";
import LandingPage from "./pages/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";

import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="p-4 w-[95vw] mx-auto md:w-[90vw] md:mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
