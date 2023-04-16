import React from 'react'
import { motion } from 'framer-motion';

import { FaReact } from "react-icons/fa";
import { MdHtml, MdCss, MdOutlineDesignServices } from "react-icons/md";
import { TbBrowserCheck } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { GrDocumentPerformance } from "react-icons/gr";
import { CgPerformance } from "react-icons/cg";
// DiResponsive 
const ServicesSection = () => {
 return (
  <div className='container m-auto px-5  lg:px-28 md:px-5' id='service' >
   <p className='section_heading mb-10'>What I Offer</p>
   <div className='flex flex-wrap gap-10 sm:justify-between justify-center'>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs'
    >
     <div className='flex flex-col items-start gap-3 mb-5'>
      <motion.div
       animate={{ rotate: [0, 180, 360] }}
       transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
       style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
       <FaReact size={45} color='#ff4500' />
      </motion.div>
      <p className='servicesHeading'>React.js development</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can build custom React.js applications from scratch or work on existing projects to add new features and improve performance.
     </div>
    </motion.div>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs'
    >
     <div className='flex flex-col items-start gap-3 mb-5'>
      <div className='flex gap-3 justify-center items-center'>

       <MdHtml size={45} color='#ff4500' /> <MdCss size={45} color='#ff4500' />
      </div>
      <p className='servicesHeading'>HTML & CSS development</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can create pixel-perfect and responsive web designs using HTML and CSS that are optimized for different devices and screen sizes.
     </div>
    </motion.div>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs'
    >
     <div className='flex flex-col items-start gap-3 mb-5'>

      <TbBrowserCheck size={45} color='#ff4500' />
      <p className='servicesHeading'>Cross - browser compatibility</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can ensure that your web applications are compatible with all major web browsers, including Chrome, Firefox, Safari, and Edge.
     </div>
    </motion.div>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs'
    >
     <div className='flex flex-col items-start gap-3 mb-5'>

      <DiResponsive size={45} color='#ff4500' />
      <p className='servicesHeading'>Responsive web design</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can create responsive web designs that are optimized for different devices and screen sizes, ensuring that looks well across all platforms.
     </div>
    </motion.div>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs'
    >
     <div className='flex flex-col items-start gap-3 mb-5'>

      <AiOutlineApi size={45} color='#ff4500' />
      <p className='servicesHeading'>Integration with other tech</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can integrate React.js with other technologies such as APIs, databases, and server - side technologies to build robust and scalable applications.
     </div>
    </motion.div>
    <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className='max-w-xs '
    >
     <div className='flex flex-col items-start gap-3 mb-5'>

      <CgPerformance size={45} color='#ff4500' />
      <p className='servicesHeading'>Performance optimization</p>
     </div>
     <div className='w-full bg-orange-50 text-slate-950 p-8 text-center rounded-2xl'>
      I can optimize the performance of your web applications by implementing best practices for code optimization, caching, and data loading.
     </div>
    </motion.div>
   </div>
  </div>
 )
}

export default ServicesSection




