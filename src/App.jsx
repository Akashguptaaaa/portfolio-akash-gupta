import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Education from "./components/Education";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Navigation onNavigate={handleNavigate} />
      <div className="theme-toggle-wrap">
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      <main className="container">
        <section id="home">
          <Header />
        </section>
        <Profile />
        <section id="about">
          <About />
        </section>
        <TechnicalSkills />
        <section id="experience">
          <Experience />
          <CaseStudies />
        </section>
        <Education />
        <Strengths />
        <section id="contact">
          <Contact />
        </section>
        <section id="resume">
          <ResumeDownload />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
