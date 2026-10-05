
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LayoutGroup } from "framer-motion";

import IntroAnimation from "./components/IntroAnimation";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Education from "./components/Education";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Experience";
import FeaturedWebsite from "./components/FeaturedWebsite";
import Projects from "./components/ProjectsSection";
import RateSection from "./components/RateSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

import TechStack from './components/TechStack';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <LayoutGroup>
      <div
        className="
          min-h-screen
          bg-white
          dark:bg-[#111827]
          text-gray-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        <IntroAnimation />

        <Header />

        <main>
          <HeroSection />
          <Education />
          <TechStack />

          <AboutSection />
          <Skills />
          <FeaturedWebsite />
          <Projects />
          <RateSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </LayoutGroup>
  );
};

export default App;

