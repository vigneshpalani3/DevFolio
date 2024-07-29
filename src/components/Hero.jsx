import { FaDownload, FaLinkedin } from 'react-icons/fa6'
import avatar from '../images/avatar.png'
import { DiGithubBadge } from 'react-icons/di'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import pdf from '../assets/vignesh_palani CV.pdf'

const Hero = () => {
  return (
    <section id='Home' className="min-h-screen min-md:mt-[0] mt-[80px] min-md:pb-[0] pb-[10px] pt-[60px] grid md:grid-cols-2 md:items-center gap-10 min-md:grid-cols-2 justify-items-center p-6 min-md:items-center mx-1 min-sm:mx-5 relative overflow-hidden">
      <div className='max-w-[450px]'>
        <motion.h1 className="font-bold font-sora text-slate-800 text-[clamp(1rem,10vw,4rem)] md:text-[clamp(1rem,6vw,3rem)]"
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
        className="text-[clamp(0.9rem,5vw,2rem)] md:text-[clamp(0.9rem,3vw,1.5rem)] text-transparent bg-gradient-to-bl font-sora from-blue-950 w-fit via-blue-700 to-blue-400 mt-2 bg-clip-text">
          Junior Full-Stack Developer
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
        className="mt-2 overflow-hidden text-slate-800 text-sm min-sm:text-base leading-6 min-lg:text-lg">
          I'm a full-stack developer who 
          loves bringing ideas to life through real-time projects. 
          I'm always looking to level up my skills and make a bigger impact
          in the development and programing world.
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
        className='flex overflow-hidden items-center justify-between mt-6'>
          <div className='flex items-center gap-2'>
            <a href="" ><FaLinkedin className='fill-blue-600 text-2xl' /></a>
            <a href="https://github.com/vigneshpalani3"><DiGithubBadge className='fill-blue-600 text-3xl'/></a>
            <a href=""><FaInstagram className='fill-blue-600 text-2xl'/></a>
          </div>
          <a download='Resume' href={pdf} className='flex items-center gap-2 py-1 px-3 bg-gradient-to-br rounded-md from-blue-900 via-blue-700 to-blue-500 cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all duration-300'>
            <span className='text-md tracking-wide text-slate-50 text-sm'>Resume</span>
            <FaDownload className='fill-slate-50 text-sm'/>
          </a>
        </motion.div>
      </div>
      <motion.div
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      transition={{
        duration:0.8,
        delay:0.5
      }}
      className='w-[clamp(260px,70%,450px)] relative h-fit mt-9 sm:m-0 place-self-center'>
        <img src={avatar} alt="avatar" className=' rounded-md'/>
      </motion.div>
    </section>
  )
}

export default Hero