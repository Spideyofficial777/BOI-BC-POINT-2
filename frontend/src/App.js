import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AntiCopyProtection from "./components/AntiCopyProtection";
import LanguageProvider from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <AntiCopyProtection />
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;