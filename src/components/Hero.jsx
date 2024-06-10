import { FaDownload, FaLinkedin } from 'react-icons/fa6'
import avatar from '../images/avatar.jpg'
import { DiGithubBadge } from 'react-icons/di'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import pdf from '../assets/vignesh_palani CV.pdf'

const Hero = () => {
  return (
    <section id='Home' className="min-h-screen rounded-xl md:mt-[0] mt-[120px] md:pb-[0] pb-[70px] pt-[60px] grid gap-10 md:grid-cols-2 justify-items-center p-6 md:items-center mx-3 relative overflow-hidden">
      <div className='max-w-[450px]'>
        <motion.h1 className="text-5xl font-bold font-sora text-slate-800 lg:text-[4rem]"
        initial={{
          x:'-100vw'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:0.5,
          type:'spring',
          stiffness:110,
          delay:0.5,
        }}
        >
          hi, I'm <span className="text-blue-600">Vignesh</span>
        </motion.h1>
        <motion.h2
        initial={{
          x:'100vw'
        }}
        animate={{
          x:0
        }}
        transition={{
          duration:0.5,
          type:'spring',
          stiffness:110,
          delay:0.5
        }}
        className="text-xl text-transparent bg-gradient-to-bl font-sora from-blue-950 w-fit via-blue-700 to-blue-400 mt-2 bg-clip-text lg:text-3xl">
          Junior Software Developer
        </motion.h2>
        <motion.p 
        initial={{
          height:0
        }}
        animate={{
          height:'fit-content'
        }}
        transition={{
          duration:0.5,
          delay:1.9
        }}
        className="mt-2 overflow-hidden text-slate-800 text-md leading-6 lg:text-lg">
          I'm a software developer who 
          loves bringing ideas to life through real-time projects. 
          I'm always looking to level up my skills and make a bigger impact
          in the software development word.
        </motion.p>
        <motion.div 
        initial={{
          opacity:0,
          y:'30px'
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          delay:2.8,
        }}
        className='flex overflow-hidden items-center justify-between mt-6 pr-2'>
          <div className='flex items-center gap-5'>
            <a href="" ><FaLinkedin className='fill-blue-600 text-4xl' /></a>
            <a href=""><DiGithubBadge className='fill-blue-600 text-5xl'/></a>
            <a href=""><FaInstagram className='fill-blue-600 text-4xl'/></a>
          </div>
          <a download='Resume' href={pdf} className='flex items-center gap-2 px-4 py-2 bg-gradient-to-br rounded-md from-blue-900 via-blue-700 to-blue-500 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all duration-300'>
            <span className='text-md tracking-wide text-slate-50 font-base'>Resume</span>
            <FaDownload className='fill-slate-50'/>
          </a>
        </motion.div>
      </div>
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1,
        rotateY:[0,180,270,360]
      }}
      transition={{
        duration:0.8,
        delay:0.5
      }}
      className='flip w-[clamp(300px,90%,450px)] relative h-fit mt-9 sm:m-0 place-self-center'>
        <img src={avatar} alt="avatar" className=' rounded-md'/>
      </motion.div>
    </section>
  )
}

export default Hero