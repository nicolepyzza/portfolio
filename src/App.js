import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Document } from 'react-pdf';
import "./App.css";
import Navbar from "./components/navbar";
import resume from './assets/NicolePyzza2024.pdf';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      var header = document.getElementById('header');
      var sticky = header.offsetTop;

        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll)
    };
}, []);
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
            zIndex: 0,
          }} />
        </div>
      )}>
        <div id="home" className="page">
          <h1>nicole pyzza</h1>
          <p class='sub'>DevOps | Cloud | Site Reliability Engineer</p>
          <Navbar />
        </div>
      </Parallax>
      <Parallax strength={500}> 
        <div id="about" className="page">
          <h2>About</h2>
          <p>This is the about section. </p>
        </div>
      </Parallax>
      <Parallax strength={500} renderLayer={(percentage) => (
        <div>
          <div style={{ 
            position: "fixed",
            background: `rgba(168, 160, 125, .4)`,
            left: "80%",
            top: "30%",
            borderRadius: "50%",
            transform: "translate(-50%,-50%)",
            width: percentage * 300,
            height: percentage * 300,
          }} />
        </div>
      )}>
        <div id="experience" className="page" >
          <h2>Experience</h2>
          <p>This is the experience section.</p>
        </div>
      </Parallax>
      <Parallax strength={500}>
        <div id="education" className="page">
          <h2>Education</h2>
          <p>This is the education section. </p>
        </div>
      </Parallax>
      <Parallax strength={500} renderLayer={(percentage) => (
        <div>
          <div style={{ 
            position: "fixed",
            background: `rgba(166, 188, 128, .6)`,
            left: "30%",
            top: "80%",
            borderRadius: "50%",
            transform: "translate(-50%,-50%)",
            width: percentage * 800,
            height: percentage * 800,
          }} />
        </div>
      )}>
        <div id="resume" className="page">
          <h2>Resume</h2>
          <Document file={resume} />
        </div>
      </Parallax>
    </div>
  );
}

export default App;
