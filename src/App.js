import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CinemaPage from "./pages/CinemaPage";
import MoviePage from "./pages/MoviePage";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import UserFormPage from "./pages/userformpage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cinema" element={<CinemaPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/seats" element={<SeatSelectionPage />} />
<Route path="/userform" element={<userformpage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
