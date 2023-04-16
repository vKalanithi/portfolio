import React from 'react'
import { motion } from 'framer-motion';
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const ContactSection = () => {
 return (
  <div className='container m-auto lg:px-28 md:px-5 py-20 flex flex-col justify-center items-center gap-3' id='contact'>
   <p className='section_heading mb-3'>Get In Touch With Me</p>
   <p>vkalanithi01@gmail.com</p>
   <p>+91 9952358134</p>
   <div className='flex gap-5'>
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
 )
}

export default ContactSection