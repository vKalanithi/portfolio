import React from 'react'
import TypingAnimation from './TypingAnimation'
import { motion } from 'framer-motion';
import { ImLinkedin } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
const HeroSection = () => {
 const words = ['Developer', 'Coder', "Designer"];
 // { <TypingAnimation words={words} /> }
 return (
  <div className='container mx-auto bannerContainer w-full ' id='home'>
   <div className='bannerImg  flex justify-center items-center  h-full w-full flex-col '>
    <div className='container text-center max-w-3xl z-10 sm:text-4xl  text-xl'>
     <p className='banner_text pl-5 sm:pl-32'>I'm</p>
     <div className='banner_textsection'>
      <h1 className='bannerText font-medium text-5xl sm:font-semibold sm:text-9xl'>{<TypingAnimation words={words} />}</h1>
      <p className='banner_name font-black sm:text-3xl text-xl'>Kalanithi</p>

     </div>
     <div className='flex gap-5 mt-5 justify-center items-center'>
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       onClick={() => {
        window.open('https://www.linkedin.com/in/kalanithi-v', '_blank')
       }}
      >
       <ImLinkedin size={24} color='#ff4500' className='cursor-pointer' />
      </motion.div>
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       onClick={() => {
        window.open('https://www.instagram.com/kalanithi_venkatesh/', '_blank')
       }}
      >

       <BsInstagram size={24} color='#ff4500' className='cursor-pointer' />
      </motion.div>
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       onClick={() => {
        window.open('https://twitter.com/kalanithi__v', '_blank')
       }}
      >
       <BsTwitter size={24} color='#ff4500' className='cursor-pointer' />
      </motion.div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default HeroSection