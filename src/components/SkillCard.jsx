import React from 'react'

const SkillCard = ({children,title}) => {
  return (
    <div className='w-[clamp(250px,100%,300px)] sticky top-1/4 shadow-sm shadow-black flex justify-between items-center bg-slate-100 h-20 px-3 rounded-md'>
      {children}
      <h2 className='text-lg text-black font-semibold'>{title}</h2>
    </div>
  )
}

export default SkillCard