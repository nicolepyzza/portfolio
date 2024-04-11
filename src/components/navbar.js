import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import resume from '../assets/NicolePyzza2024.pdf';

function Navbar() {
    
    return(
        <div className="header" id="header">
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>
            <Link to="about" smooth={true}>
                About
            </Link>
            <Link to="experience" smooth={true} duration={500}>
                Experience
            </Link>
            <Link to="education" smooth={true} duration={500}>
                Education
            </Link>
            <Link to="resume" smooth={true} duration={500}>
                Resume
            </Link>
            <Link to="#" smooth={true} duration={500} onClick={(e) => {
            window.location.href = 'mailto:nicolepyzza@gmail.com';
            e.preventDefault();
            }}>
                Contact
            </Link>
        </div>
    );
}

export default Navbar;
