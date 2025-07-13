import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CinemaPage from "./pages/CinemaPage";
import MoviePage from "./pages/MoviePage";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import UserFormPage from "./pages/userformpage"; // file name must match exactly
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cinema" element={<CinemaPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/seats" element={<SeatSelectionPage />} />
          <Route path="/userform" element={<UserFormPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
