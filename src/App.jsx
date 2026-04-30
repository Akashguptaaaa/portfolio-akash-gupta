import { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import TechnicalSkills from "./components/TechnicalSkills";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Education from "./components/Education";
import Strengths from "./components/Strengths";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <Header />
      <div className="theme-toggle-wrap">
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
      <main className="container">
        <Profile />
        <TechnicalSkills />
        <Experience />
        <CaseStudies />
        <Education />
        <Strengths />
      </main>
    </div>
  );
}

export default App;
