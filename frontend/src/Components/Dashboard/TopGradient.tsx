import React from 'react'

function TopGradient() {
  return (
    <div className='w-full  relative h-full flex items-center overflow-hidden justify-center bg-[#5FA5F9] rounded-lg'>

        <div className=' animate-blob3 blur-xl w-50 h-50 top-20 absolute rounded-full bg-[#102F64]'></div>
        <div className=' animate-blob blur-xl absolute w-70 h-70 rounded-full left-0 bg-[#297bdf]'></div>
        <div className=' animate-blob2 blur-xl absolute w-30 h-30 rounded-full bg-violet-400 right-0'></div>

        <div className='text-7xl from-zinc-100 to-zinc-600
        bg-clip-text text-transparent bg-gradient-to-b
        font-["Neue_Haas_Grotesk_Text_Pro"]  tracking-widest z-100'>SPACE</div>
    </div>
  )
}

export default TopGradient