import React from 'react'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <section id='Service' className='mx-6 sm:mx-12 pb-16 overflow-hidden'>
      <h1 className='text-3xl font-sora font-bold text-transparent flex items-center gap-1 mb-12 tracking-tight bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 w-fit bg-clip-text'>Services</h1>
      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 gap-14'>
        <motion.div
        initial={{
          opacity:0,
          x:'-200px',
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:0.3,
          delay:0.3,
          type:'spring',
          stiffness:110
        }}
        className='border-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 p-5 rounded-md flex flex-col gap-5 max-w-[350px]'>
          <h1 className='text-[3rem] font-sora font-bold tracking-tighter text-blue-400 relative'>Front-End<span className='text-[2.5rem] text-blue-200 absolute top-10 left-0'>Development</span></h1>
          <p className='text-sm mt-2 leading-7 text-black font-medium'>
            Bring your UI/UX designs to life with modern front-end development.
            Specializing in JavaScript and React, I create interactive, high-performance 
            interfaces that engage and delight users
          </p>
        </motion.div>
        <motion.div
        initial={{
          opacity:0,
          x:'200px',
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          duration:0.3,
          delay:0.3,
          type:'spring',
          stiffness:110
        }}
        className='border-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 p-5 rounded-md flex flex-col gap-5 max-w-[350px]'>
          <h1 className='text-[3rem] font-sora font-bold tracking-tighter text-blue-400 relative'>Back-End<span className='text-[2.5rem] text-blue-200 absolute top-10 left-0'>Development</span></h1>
          <p className='text-sm mt-2 leading-7 text-black font-medium'>
            Power your applications with robust back-end development.
            With expertise in Node.js and Express.js, I build secure,
            efficient, and scalable server-side solutions that ensure your
            applicationron smoothly
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Service