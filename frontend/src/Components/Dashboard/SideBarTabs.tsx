import React, { type ReactElement } from 'react'
import {motion} from "motion/react"

interface dataType{
    icon:ReactElement,
    text:String,
    onClick?:()=> void
}

function SideBarTabs(props:dataType) {

    console.log(props)
    return (
    <motion.div 
    whileTap={{scale:0.9}}
    onClick={props.onClick}
    className=' w-25 md:w-60 p-1 cursor-pointer md:p-2 items-center justify-center text-white mt-4 flex gap-2 md:gap-4 rounded-md outline-1 outline-amber-50/10'>
        <div  className=''>
            {props.icon}
        </div>

        <div>
            {props?.text}
        </div>
    </motion.div>
  )
}

export default SideBarTabs