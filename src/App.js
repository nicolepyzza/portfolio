import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";
import "./App.css";

function App() {
  const [navStuck, setNavStuck] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled >= navHeight) {
        setNavStuck(true);
      } else {
        setNavStuck(false);
      }
    };

    const handleResize = () => {
      const navElement = document.getElementById("navbar");
      if (navElement) {
        const height = navElement.offsetHeight;
        setNavHeight(height);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial resize
    handleResize();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navHeight]);

  return (
    <div className="App">
      <Parallax strength={500} renderLayer={(percentage) => (
        <div>
          <div style={{ 
            position: "fixed",
            background: `rgba(220, 213, 185, .4)`,
            left: "50%",
            top: "50%",
            borderRadius: "50%",
            transform: "translate(-50%,-50%)",
            width: percentage * 500,
            height: percentage * 500,
          }} />
        </div>
      )}>
        <div id="home" className="page">
          <h1>nicole pyzza</h1>
          <p class='sub'>DevOps | Cloud | Site Reliability Engineer</p>
          <div className={navStuck ? "navbar stuck" : "navbar"}>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="about" smooth={true}>
              About
            </Link>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </div>
        </div>
      </Parallax>
      <Parallax strength={500}> 
        <div id="about" className="page">
          <h2>About</h2>
          <p>This is the about section. A8A07D</p>
        </div>
      </Parallax>
      <Parallax bgImage="/path/to/your/image.jpg" strength={500}>
        <div id="experience" className="page">
          <h2>Experience</h2>
          <p>This is the experience section.7BC1CD</p>
        </div>
      </Parallax>
      <Parallax bgImage="/path/to/your/image.jpg" strength={500}>
        <div id="resume" className="page">
          <h2>Resume</h2>
          <p>This is the resume section.DCD5B9</p>
        </div>
      </Parallax>
      <Parallax bgImage="/path/to/your/image.jpg" strength={500}>
        <div id="contact" className="page" style={{ backgroundColor: "#A8A07D" }}>
          <h2>Contact</h2>
          <p>This is the contact section.</p>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
