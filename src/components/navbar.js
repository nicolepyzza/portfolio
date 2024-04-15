import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import resume from '../assets/NicolePyzza2024.pdf';

function Navbar() {
    
    return(
        <div className="header" id="header">
            <Link to="home" smooth={true} duration={500}>
                HOME
            </Link>
            <Link to="about" smooth={true}>
                ABOUT
            </Link>
            <Link to="experience" smooth={true} duration={500}>
                EXPERIENCE
            </Link>
            <Link to="education" smooth={true} duration={500}>
                EDUCATION
            </Link>
            <Link to="resume" smooth={true} duration={500}>
                RESUME
            </Link>
            <Link to="#" smooth={true} duration={500} onClick={(e) => {
            window.location.href = 'mailto:nicolepyzza@gmail.com';
            e.preventDefault();
            }}>
                CONTACT
            </Link>
        </div>
    );
}

export default Navbar;
