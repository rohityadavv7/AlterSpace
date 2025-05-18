import React,{useRef} from 'react'
import {motion, useMotionValueEvent, useTransform, useScroll} from "motion/react"

function Questions() {
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (val) => {
        console.log(val)
    })

    const scale = useTransform(scrollY, [950, 1350],[0.5, 1])
  return (
    <motion.div 
    style={{scale}}
    className=' w-screen  md:w-11/12 p-5 md:p-20 flex flex-col md:flex-row mx-auto   items-center'>
        <div className='text-8xl md:text-9xl flex items-center w-full md:w-[40%] h-[40vh] md:h-[50vh] '>
            Have<br/> Questions?
        </div>

        <div className='font-["Satoshi_Variable"]  w-full md:w-[60%] p-5'>
            <div className='flex flex-col space-y-2 mt-4 mb-4  h-[3.5rem] border-b border-b-amber-50/50 group transition-all duration-500
             hover:h-[6.5rem] overflow-hidden  p-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>
                        What is AlterSpace?
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="size-8 group-hover:rotate-90  transition-all duration-300 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='text-sm text-zinc-400'>
                    AlterSpace is like your second space, where you store whatever 
                    you want so that you dont forget it, when you want it.
                </div>
            </div>

            <div className='flex flex-col space-y-2 mt-4 mb-4  h-[3.5rem] border-b border-b-amber-50/50 group transition-all duration-500
             hover:h-[6.5rem] overflow-hidden  p-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>
                        How to Join?
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="size-8 group-hover:rotate-90  transition-all duration-300 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='text-sm text-zinc-400'>
                    Click on Menu , then go to register now to be a part of our community!
                </div>
            </div>

            <div className='flex flex-col space-y-2 mt-4 mb-4  h-[3.5rem] border-b border-b-amber-50/50 group transition-all duration-500
             hover:h-[6.5rem] overflow-hidden  p-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>
                        Who can join?
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="size-8 group-hover:rotate-90 transition-all duration-300 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='text-sm text-zinc-400'>
                    Anyone who wants to streamline his/her thoughts at one place and think clearly 
                    can get registered with us.
                </div>
            </div>

            <div className='flex flex-col space-y-2 h-[3.5rem] mt-4 mb-4 border-b border-b-amber-50/50 group transition-all duration-500
             hover:h-[6.5rem] overflow-hidden  p-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>
                        Is it Paid?
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="size-8 group-hover:rotate-90 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='text-sm text-zinc-400'>
                    For now , yes it is Free! but we might launch subscription models soon!
                </div>
            </div>
        </div>
    </motion.div> 
  )
}

export default Questions