import React from 'react'
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import { SiTypescript, SiReact, SiMui, SiRedux, SiBootstrap, SiTailwindcss, SiAntdesign, SiGithub, SiAdobeillustrator, SiAdobelightroom, SiAdobephotoshop } from "react-icons/si";
import { motion } from 'framer-motion';


// IoLogoJavascript  
const AboutSection = () => {
 return (<div className='container m-auto px-5 lg:px-28 md:px-5 py-14' id='about' >
  <p className='section_heading'>About me</p>
  <div className='container flex gap-5 m-auto py-10 flex-col sm:flex-row '>
   <div className='sm:w-2/5 flex flex-col gap-20'>
    <div className="icon-container">
     <div className="icon">
      <ImHtmlFive size={64} />
     </div>
     <div className="icon">
      <ImCss3 size={64} />
     </div>
     <div className="icon">
      <IoLogoJavascript size={64} />
     </div>
     <div className="icon">
      <SiTypescript size={64} />
     </div>
     <div className="icon">
      <SiReact size={64} />
     </div>
    </div>
    <div className="icon-container-scrollOppsite">
     <div className="icon">
      <SiMui size={64} />
     </div>
     <div className="icon">
      <SiRedux size={64} />
     </div>
     <div className="icon">
      <SiBootstrap size={64} />
     </div>
     <div className="icon">
      <SiTailwindcss size={64} />
     </div>
     <div className="icon">
      <SiAntdesign size={64} />
     </div>
    </div>
    <div className="icon-container">
     <div className="icon">
      <SiGithub size={64} />
     </div>
     <div className="icon">
      <TbBrandVscode size={64} />
     </div>
     <div className="icon">
      <SiAdobeillustrator size={64} />
     </div>
     <div className="icon">
      <SiAdobelightroom size={64} />
     </div>

     <div className="icon">
      <SiAdobephotoshop size={64} />
     </div>
    </div>
   </div>
   <div className='sm:w-3/5 aboutSection  flex justify-center items-center flex-col'>
    <p><span className='boldText pl-20'>Hi</span> there! My name is <span className='boldText'>kalanithi</span>, and I'm a computer science graduate with <span className='boldText'>2+ </span> years of professional experience in front-end development.</p>
    <br />
    <p>My expertise lies in using a variety of technologies such as React, Next.js, Typescript, Javascript, etc... to create engaging user interfaces. I have a passion for UI design and enjoy working on <span className='boldText'>CSS</span> and <span className='boldText'>UI-related</span> projects.</p>
    <br />
    <p>I strive to continuously improve my technical knowledge and stay up-to-date with the latest developments in the field.</p>
    <br />
    <p>If you're <span className='boldText'>looking</span> for someone with experience in front-end development and a love for UI design, feel free to get in touch with me. I'm always looking for new opportunities to expand my skills and contribute to exciting projects.</p>

    <motion.div
     whileTap={{ scale: 0.9 }}
     className='customButton mt-8'

    > <a href="#contact">Contact Me</a></motion.div>
   </div>
  </div></div>
 )
}

export default AboutSection