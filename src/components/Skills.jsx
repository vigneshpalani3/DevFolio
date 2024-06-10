import React from 'react'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3 } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io'
import { FaPython } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa6'
import { FaNodeJs } from 'react-icons/fa6'
import { SiExpress } from 'react-icons/si'
import { MdOutlineDoubleArrow } from "react-icons/md";
import SkillCard from './SkillCard'


const Skills = () => {
  return (
    <section id="Skills" className=' min-h-screen pt-12 px-4'>
      <h1 className='text-4xl font-sora font-bold
      mx-3 text-transparent flex items-center gap-1 mb-12 tracking-tight bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 w-fit bg-clip-text'>Skills</h1>

      <div className='grid max-w-[650px] mx-auto grid-cols-1 justify-items-center md:grid-cols-2 gap-y-5'>
        <SkillCard title={'React'}>
          <FaReact className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'Tailwind CSS'}>
          <RiTailwindCssFill className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'Python'}>
          <FaPython className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'Javascript'}>
          <IoLogoJavascript className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'MySql'}>
          <GrMysql className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'HTML'}>
          <FaHtml5 className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'CSS'}>
          <FaCss3 className="text-4xl fill-blue-600"/>
        </SkillCard>
        <SkillCard title={'Github'}>
          <FaGithub className="text-4xl drop-shadow-md fill-blue-600"/>
        </SkillCard >
        <SkillCard title={'Node JS'}>
          <FaNodeJs className="text-4xl drop-shadow-md fill-blue-600"/>
        </SkillCard >
        <SkillCard title={'Express JS'}>
          <SiExpress className="text-4xl drop-shadow-md fill-blue-600"/>
        </SkillCard >
      </div>

    </section>
  )
}

export default Skills