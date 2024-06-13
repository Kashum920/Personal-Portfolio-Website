import React, {useRef, useState, useEffect } from 'react'
import { FaDownload, FaXmark } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaBars } from "react-icons/fa";

const Navbar = () => {

    const navRef = useRef();
    const [isNavbarFixed, setIsNavbarFixed] = useState(false); // State to track whether navbar should be fixed

    const showNavBar = () =>{
        navRef.current.classList.toggle('responsive_nav');
    }

    // Scrolling Fixed Navbar
    const handleScroll = () => {
        console.log('Scrolling...');
        if (window.scrollY > 50) { 
            setIsNavbarFixed(true);
        } else {
            setIsNavbarFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); 

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

  return (
    <div className="container">
        <div className={`header ${isNavbarFixed ? 'fixed-nav' : ''}`}>
            <div className="logo">
                <img src="images/logo-primary.png" alt="" />
                <a href="\#" className='mail'>mail@gerolddesign.com</a>
            </div>
            <div className="links">
                <div className='navbar' ref={navRef}>
                    <a href="\#services">Services</a>
                    <a href="\#works">Works</a>
                    <a href="\#resume">Resume</a>
                    <a href="\#skills">Skills</a>
                    <a href="\#testimonials">Testimonials</a>
                    <a href="\#contact">Contact</a>

                    <span id='closeBtn' onClick={showNavBar}><FaXmark /></span>
                </div>
                <button className="btn">Hire Me!</button>
                <span id='menuBtn' onClick={showNavBar}><FaBars /></span>
            </div>
        </div>
        <div className="home">
            <div className="content">
                <h4>I am Gerold</h4>
                <h1>Web Developer + <br /> UX Designer</h1>
                <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                <div className="buttons">
                    <button>Download CV <FaDownload /></button>
                    <div className="social">
                        <a href="\#"><FaFacebookF /></a>
                        <a href="\#"><FaLinkedinIn /></a>
                        <a href="\#"><FaInstagram /></a>
                        <a href="\#"><FaGithub /></a>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="images/hero_img.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar