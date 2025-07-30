import React from "react";
import LandingPage from "./pages/landingPage/landingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Footer from "./components/footer";
import UserDashBoard from "./dashboards/user/userDashLayout.jsx";

function App() {
  return (
    <>
      <div className="p-4 w-[95vw] mx-auto md:w-[90vw] md:mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard/*" element={<UserDashBoard />} />{" "}
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
