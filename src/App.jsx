import React from "react";
import HeroSection from "./components/HeroSection";
import './styles/LandingPage.css'
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return <div className="mainContainer font-poppins text-zinc-50">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ContactSection />
  </div>
}

export default App;
