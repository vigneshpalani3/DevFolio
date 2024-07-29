import React from 'react'

const SkillCard = ({children,title}) => {
  return (
    <div className='w-[clamp(250px,100%,300px)] sticky top-1/4 shadow-sm shadow-black flex justify-between items-center  h-20 px-6 rounded-md bg-[#d4dee0]'>
      {children}
      <h2 className='text-base text-black font-semibold'>{title}</h2>
    </div>
  )
}

export default SkillCard