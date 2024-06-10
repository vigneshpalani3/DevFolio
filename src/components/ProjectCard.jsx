import React from 'react'
import { FaCircle } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiRectangleLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const ProjectCard = ({img,title,text,pageUrl,gitUrl}) => {
  return (
    <motion.div
    initial={{
      opacity:0,
      y:'60px'
    }}
    whileInView={{
      opacity:1,
      y:0
    }}
    transition={{
      duration:0.5,
      delay:0.3
    }}
    className='flex flex-col gap-6 sm:grid-cols-2 my-16 items-center sm:gap-14 sm:flex-row sm:odd:flex-row-reverse'>
      <div className='w-[clamp(300px,100%,470px)] sm:flex-1'>
        <div className="w-full aspect-[14/1] rounded-t-md bg-stone-800 flex justify-between px-3">
          <div className='flex items-center gap-2'>
            <FaCircle className='text-base fill-red-500'/>
            <FaCircle className='text-base fill-yellow-500'/>
            <FaCircle className='text-base fill-green-500'/>
          </div>
          <div className='flex items-center gap-2'>
            <FaMinus className='fill-white text-lg'/>
            <RiRectangleLine className='fill-white text-lg'/>
            <IoClose className='fill-white text-lg'/>
          </div>
        </div>
        <img src={img} alt="" className='w-full h-[90%] object-contain object-center rounded-b-md shadow-2xl shadow-black/50'/>
      </div>
      <div className='sm:flex-1'>
        <h1 className='text-3xl text-blue-600
        font-semibold font-sora mb-1'>{title}</h1>
        <p className='text-md text-slate-900 lg:text-lg'>{text}</p>
        
        <div className='mt-4 flex gap-2'>
          <a href={pageUrl} className='font-semibold lg:text-lg text-md text-blue-50 border-[1px] border-blue-600 bg-blue-600 hover:bg-blue-800 py-1 px-4 rounded-sm'>Visit</a>
          <a href={gitUrl} className='font-semibold lg:text-lg text-md text-blue-600 rouned-sm border-[1px] border-blue-600 hover:bg-blue-200 py-1 px-4 rounded-sm'>github</a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard