import React, { useState } from 'react'
import {Spiral as Hamburger} from 'hamburger-react'
import { motion,AnimatePresence } from 'framer-motion'

const Header = () => {

  const [isOpen,setIsOpen] = useState(false)
  const [active,setActive] = useState('Home')

  return (
    <motion.header 
    initial={{
      y:'-60px'
    }}
    animate={{
      y:0
    }}
    className='flex justify-between pl-4 pr-3 z-20
    items-center backdrop-blur-2xl fixed top-0 left-0 w-full
    bg-white py-1 md:py-1 lg:py-5'>
      <h1 className='text-lg font-bold text-slate-800 font-sora'>DevFolio</h1>
      <div className="hidden max-lg:block">
        <Hamburger toggled={isOpen} size={30} color='#222' toggle={setIsOpen} />
      </div>
      <nav className='hidden lg:block'>
        <ul className='flex gap-14 pr-4'>
          <li className={`${active=='Home'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Home')}><a href="#Home">Home</a></li>
          <li className={`${active=='Skills'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Skills')}><a href="#Skills">Skills</a></li>
          <li className={`${active=='Projects'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Projects')}><a href="#Projects">Projects</a></li>
          <li className={`${active=='Services'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Services')}><a href="#Service">Services</a></li>
          <li className={`${active=='Contact'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Contact')}><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
      <AnimatePresence>
        {
          isOpen &&
          (<motion.div 
            initial={{
              scale:0
            }}
            animate={{
              scale:1
            }}
            exit={{
              opacity:0
            }}
            transition={{
              stiffness:200,
              type:'spring',
              duration:0.8
            }}
          className='fixed right-3 top-16 bg-white shadow-lg shadow-slate-600 p-6 w-44 rounded-2xl'>
            <ul className='flex flex-col gap-2 items-center'>
              <li className={`${active=='Home'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Home')}><a href="#Home">Home</a></li>
              <li className={`${active=='Skills'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Skills')}><a href="#Skills">Skills</a></li>
              <li className={`${active=='Projects'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Projects')}><a href="#Projects">Projects</a></li>
              <li className={`${active=='Services'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Services')}><a href="#Service">Services</a></li>
              <li className={`${active=='Contact'&& 'text-blue-600'} font-semibold`} onClick={()=>setActive('Contact')}><a href="#Contact">Contact</a></li>
            </ul>
          </motion.div>)
        }
        
      </AnimatePresence>
    </motion.header>
  )
}

export default Header