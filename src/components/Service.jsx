import React from 'react'
import { motion } from 'framer-motion'

const Service = () => {
  return (
    <section id='Service' className='px-6 pb-16 overflow-hidden'>
      <h1 className='text-4xl font-sora font-bold text-transparent flex items-center gap-1 mb-12 tracking-tight bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 w-fit bg-clip-text'>Services</h1>
      <div className='flex flex-col gap-14 items-center md:flex-row justify-center'>
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
        className='border-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 p-5 w-[clamp(300px,80%,350px)] rounded-md flex flex-col gap-5'>
          <h1 className='text-[4rem] font-sora font-bold tracking-tighter text-blue-400 relative'>Front-End<span className='text-5xl text-blue-200 absolute top-16 left-0'>Development</span></h1>
          <p className='text-[1rem] mt-2 leading-7 text-black font-medium'>
            Bring your UI/UX designs to life with modern front-nd development.
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
        className='border-2 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 p-5 w-[clamp(300px,80%,350px)] rounded-md flex flex-col gap-5'>
          <h1 className='text-[4rem] font-sora font-bold tracking-tighter text-blue-400 relative'>Back-End<span className='text-5xl text-blue-200 absolute top-16 left-0'>Development</span></h1>
          <p className='text-[1rem] mt-2 leading-7 text-black font-medium'>
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