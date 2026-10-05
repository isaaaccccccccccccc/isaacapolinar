import { useEffect } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedWebsite from "./components/FeaturedWebsite";
import Projects from "./components/ProjectsSection";
import RateSection from "./components/RateSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  // Fade sections in as they scroll into view. Anything already on screen stays visible.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pre");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("pre");
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <section id="work" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow">Selected work</span>
              <h2>Sites and systems I've built.</h2>
            </div>
            <FeaturedWebsite />
            <Projects />
          </div>
        </section>
        <RateSection />
        <section id="about">
          <div className="wrap">
            <AboutSection />
            <div className="two reveal">
              <Experience />
              <Education />
            </div>
          </div>
        </section>
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
