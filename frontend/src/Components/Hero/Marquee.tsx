import React from 'react'
import {motion} from "motion/react"

function Marquee() {
  return (
    <div className='w-full flex gap-4 shrink-0 whitespace-nowrap font-["Neue_Haas_Grotesk_Text_Pro"] overflow-hidden'>
        <motion.div
        initial={{x:0}}
        animate={{x:"-40%"}}
        transition={{duration:15, repeat:Infinity, ease:"linear"}}
        className='flex gap-4 whitespace-nowrap shrink-0'
        >
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.         
            </motion.span>
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.         
            </motion.span>
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.          
            </motion.span >
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.          
            </motion.span>
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.          
            </motion.span>
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.          
            </motion.span>
            <motion.span className='text-9xl'>
                Like it, Save it, Share it.          
            </motion.span>
           
        </motion.div>

    </div>
  )
}

export default Marquee