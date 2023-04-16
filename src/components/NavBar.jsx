import React, { useState, useEffect } from 'react';
import { MdDensitySmall } from "react-icons/md";

const NavBar = () => {
 const [activeSection, setActiveSection] = useState('home');
 const [isMobileView, setIsMobileView] = useState(false)

 const handleScroll = () => {
  setIsMobileView(false)
  const section1 = document.getElementById('home');
  const section2 = document.getElementById('about');
  const section3 = document.getElementById('service');
  const section4 = document.getElementById('contact');
  if (
   window.scrollY >= section1.offsetTop &&
   window.scrollY < (section2.offsetTop - 100)
  ) {
   setActiveSection('home');
  } else if (
   window.scrollY >= (section2.offsetTop - 100) &&
   window.scrollY < (section3.offsetTop - 100)
  ) {
   setActiveSection('about');
  } else if (window.scrollY >= (section3.offsetTop - 100) &&
   window.scrollY < (section4.offsetTop - 500)) {
   setActiveSection('service');
  } else if (window.scrollY >= (section4.offsetTop - 500)) {
   setActiveSection('contact');
  }
  if (window.location.hash === '#home') {
   history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  if (window.location.hash === '#about') {
   history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  if (window.location.hash === '#service') {
   history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  if (window.location.hash === '#contact') {
   history.pushState('', document.title, window.location.pathname + window.location.search);
  }

 };

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);
 return (
  <div className=' container mx-auto  navbarContainer flex justify-between w-full p-4 lg:px-40 md:px-5'>
   <div></div>
   <div className='hidden sm:flex sm:gap-8'>
    <a href="#home" onClick={() => setActiveSection('home')}><p className={`navbar_menu ${activeSection === 'home' ? 'active' : ''}`}>Home</p></a>
    <a href="#about" onClick={() => setActiveSection('about')}><p className={`navbar_menu ${activeSection === 'about' ? 'active' : ''}`}>About</p></a>
    <a href="#service" ><p className={`navbar_menu ${activeSection === 'service' ? 'active' : ''}`}>Service</p></a>
    <a href="#contact"><p className={`navbar_menu ${activeSection === 'contact' ? 'active' : ''}`}>Contact us</p></a>
   </div>
   <div className='sm:hidden'>
    <MdDensitySmall size={24} color='#ff4500' onClick={() => {
     setIsMobileView(true)
    }} />
   </div>
   {isMobileView && <div className='sm:hidden flex flex-col absolute right-0 mr-8 mt-8 bg-black p-8 gap-6'>
    <a href="#home" onClick={() => setActiveSection('home')}><p className={`navbar_menu ${activeSection === 'home' ? 'active_mobile' : ''}`}>Home</p></a>
    <a href="#about" onClick={() => setActiveSection('about')}><p className={`navbar_menu ${activeSection === 'about' ? 'active_mobile' : ''}`}>About</p></a>
    <a href="#service" ><p className={`navbar_menu ${activeSection === 'service' ? 'active_mobile' : ''}`}>Service</p></a>
    <a href="#contact"><p className={`navbar_menu ${activeSection === 'contact' ? 'active_mobile' : ''}`}>Contact us</p></a>
   </div>}
  </div>
 )
}

export default NavBar