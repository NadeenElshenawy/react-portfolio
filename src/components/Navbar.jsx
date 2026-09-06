import { useState,useEffect } from 'react';
import './Navbar.css'; 
export const Navbar = () => {
    const[isScrolled,setIsScrolled]=useState(false);
    useEffect(() => {
    const handleScroll = () => {
      // Triggers scrolled state once user scrolls more than 50px
       (window.scrollY > 50? setIsScrolled(true):setIsScrolled(false));

    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled?"scrolled":""}`}>
      <div className={`nav-brand ${isScrolled ? "visible" : ""}`}>Nadeen Samy</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="btn-nav" href='https://www.linkedin.com/in/nadeensamy/' target="_blank" rel="noopener noreferrer">Let's Connect</a>
    </nav>
  );
};