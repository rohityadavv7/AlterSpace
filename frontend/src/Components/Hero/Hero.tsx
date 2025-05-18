import React, { useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion, useAnimate, useMotionValueEvent, useScroll} from "motion/react"
import { stagger } from 'motion'
import Logo from '../../assets/Logo.svg'
import Close from '../Icons/Close'
import MenuOpen from '../Icons/MenuOpen'
import { Link } from 'react-router-dom'
import avatar1 from "../../assets/avatar1.svg"
import avatar2 from "../../assets/avatar2.svg"
import share from "../../assets/share.svg"
import save from "../../assets/save.svg"
import Questions from '../Questions'
import Testimonials from '../Testimonials'

function Hero() {

   

   

    const [scope, animate] = useAnimate()

    const {scrollYProgress} = useScroll()

    useMotionValueEvent(scrollYProgress,"change" ,(val) => {
        
    })

    const[menuOpen, setMenuOpen] = useState(false);


    function startAnimation(){
        animate("span",{
            y:0,
            filter:"blur(0px)",
            opacity:1
        },{
            duration:0.5,
            delay:stagger(0.02),
            ease:"easeIn"
        })
    }

    useEffect(() => {
        if(menuOpen) return;
        startAnimation()
    },[menuOpen])

  return (
    <div 
    className='relative h-[300vh]  w-screen flex flex-col items-center z-10 bg-zinc-950 font-["Six_Caps"] text-white'>
        
        {/* TOP-GRADIENTS */}
        <div className='absolute w-70 h-70 bg-white -translate-x-[50%] -top-60 z-100 blur-3xl
         rounded-full left-1/2 right-1/2'></div>

        <div className='absolute w-140 h-140 bg-[#8d8be0] -translate-x-[50%] -top-110 z-20 blur
         rounded-full left-1/2 right-1/2'> 
         </div>

         <div className='absolute w-230 h-230 bg-[#4342ac] -translate-x-[50%] -top-180 z-20 blur-3xl
         rounded-full left-1/2 right-1/2'></div>
        
        {/* NAVBAR */}
        <div className='w-[90%] h-10 mt-10 z-1000 rounded-full justify-between flex mx-auto'>
            <div>
                <img src={Logo} className='text-white h-10 w-10 p-2 bg-white rounded-full'/>
            </div>

            <div className='flex gap-6 font-["Grenette"] shrink-0  select-none items-center'>
                <div className='text-2xl'>
                    Menu
                </div>
                <div className='flex shrink-0'>
                    <div className='transition-all flex items-center duration-300' onClick={() => setMenuOpen((prev) => !prev)}>
                        <AnimatePresence mode='wait'>
                        {
                            menuOpen?
                            (<motion.div 
                                key={"close"}
                                initial={{ filter:"blur(10px)", opacity:0}}
                                animate={{ filter:"blur(0px)", opacity:1}}
                                transition={{duration:0.2, ease:"linear"}}
                                exit={{y:10, filter:"blur(10px)", opacity:0}}
                                className=' w-8 h-8 flex items-center transition-all duration-300'><Close/></motion.div>)
                            :
                            (<motion.div 
                                key={"menu"}
                                initial={{ filter:"blur(10px)", opacity:0}}
                                animate={{ filter:"blur(0px)", opacity:1}}
                                transition={{duration:0.2, ease:"linear"}}
                                exit={{y:10, filter:"blur(10px)", opacity:0}}
                                className=' w-8 h-8 flex items-center transition-all duration-300'><MenuOpen/></motion.div>)
                        }

                        </AnimatePresence>
                    </div>
                </div>
                
            </div>
        </div>

        {
            menuOpen ?

            (<div className='w-screen   h-screen mt-5 flex mx-auto text-center justify-center items-center'>
                <motion.div ref={scope} className='flex flex-col text-9xl space-y-5'>
                    <Link to={"/"}>
                        <motion.div 
                     
                        initial={{y:10, filter:"blur(10px)", opacity:0}}
                        animate={{y:0, filter:"blur(0px)", opacity:1}}
                        transition={{duration:0.3, ease:"easeIn"}}
                        exit={{y:10, filter:"blur(10px)", opacity:0}}
                        className='cursor-pointer'>
                            {"Home".split("").map((ele,index) => (
                                <motion.span 
                                className='hoverText'
                                key={index}>
                                    {ele}
                                </motion.span>
                            ))}
                        </motion.div>
                    </Link>

                    <Link to={"/signup"}>
                        <motion.div 
                    
                        initial={{y:10, filter:"blur(10px)", opacity:0}}
                        animate={{y:0, filter:"blur(0px)", opacity:1}}
                        transition={{duration:0.3, ease:"easeIn"}}
                        exit={{y:10, filter:"blur(10px)", opacity:0}}
                        className='cursor-pointer'>
                            {"Register Now".split("").map((ele,index) => (
                                <motion.span className='hoverText'
                                key={index}>
                                    {ele}
                                </motion.span>
                            ))}
                        </motion.div>
                    </Link>

                    <Link to={"/"}>
                        <motion.div 
                        
                        initial={{y:10, filter:"blur(10px)", opacity:0}}
                        animate={{y:0, filter:"blur(0px)", opacity:1}}
                        transition={{duration:0.3, ease:"easeIn"}}
                        exit={{y:10, filter:"blur(10px)", opacity:0}}
                        className='cursor-pointer '>
                           { "Contact".split("").map((ele,index)=> (
                            <motion.span className='hoverText'
                            key={index}>{ele}</motion.span>
                           ))}
                        </motion.div>
                    </Link>
                </motion.div>
            </div>)
            :
            (
            <div className='w-screen mx-auto flex flex-col items-center'>
                <motion.div 
                    ref={scope}
                    className='text-[10rem] md:text-[18rem]  h-[28rem] relative z-1000  mt-10 flex items-center from-amber-50  to-zinc-800
                    bg-clip-text text-transparent bg-gradient-to-b'>
                        {"ALTERSPACE".split("").map((word,index) => (
                            <motion.span 
                            initial={false}
                            style={{y:10, filter:"blur(10px)", opacity:0}}
                            key={index}
                            className='bg-clip-text flex perspective-distant group flex-col hover:text-amber-50 select-none bg-gradient-to-b from-amber-50  to-zinc-800
                            text-transparent hoverText hover:font-extrabold duration-300 transition-all '>
                                <div>{word}</div>
                                <div className='h-3 w-13 group-hover:flex hidden scale-x-105 relative -top-17 blur bg-purple-400'></div>
                            </motion.span>
                        ))}
                </motion.div>

                <motion.div 
                initial={{y:20, filter:"blur(10px)", opacity:0}}
                animate={{y:0, filter:"blur(0px)", opacity:1}}
                transition={{duration:0.3, delay:0.6, ease:"linear"}}
                className='text-lg text-amber-50/50 font-["Grenette"] relative -top-25 md:-top-15 leading-7 text-center tracking-wider'>
                    Capture ideas as they come,
                    Find them when they<br/> <span className='text-white'>Matter!</span>
                </motion.div>

                
                <motion.div 
        
                className='w-[70%] relative bg-black mt-1  md:mt-4 text-5xl font-["Neue_Haas_Grotesk_Text_Pro"]
                    outline-1 outline-amber-50/40 rounded-2xl p-6'>
                    {/* <div className='w-30 h-30 absolute bg-white rounded-full right-0 blur-3xl -top-15'></div> */}

                    <div className='h-5 w-200 absolute hidden md:flex -z-10 -top-0 -left-2 blur-xl bg-[#4342ac]'></div>

                    <div className='h-5 w-200 absolute -z-10  hidden md:flex -bottom-0 -right-2 blur-xl bg-[#4342ac]'></div>

                    <div className='grid space-y-8 md:space-y-0 md:grid-cols-3 gap-4 relative z-50 overflow-hidden'>
                        {/* <div className='absolute h-10 w-10 rounded-full right-0 -bottom-5 bg-white'></div> */}
                        <Link to={"/signup"}>
                            <div className='text-center border-r-2  p-3 h-[3rem] hover:h-[6.5rem]  cursor-pointer
                            overflow-hidden transition-all duration-300 bg-[#FFFFFF] text-black
                            text-2xl  border-1 rounded-xl flex flex-col space-y-2 border-white/50'>
                                <div>Join the space</div>

                                <div className='flex relative  gap-18  items-center'>
                                    <div className=''>
                                        <img src={avatar1} className='h-10 w-10 absolute z-20 border rounded-full'/>
                                        <img src={avatar2} className='h-10 w-10 absolute left-5 z-50 border rounded-full'/>
                                    </div>
                                    <div className='text-sm relative -translate-y-[-50%] text-zinc-500 top-1/2'>others have already joined.</div>
                                </div>
                            </div>
                        </Link>

                        <div className='border-r-2 border-l-2 space-y-2 p-3 pl-4 border-white/50 flex flex-col from-amber-50 to-zinc-600
                        bg-clip-text text-transparent bg-gradient-to-b'>
                            <div className='flex gap-3 items-center'>
                                <div>Save</div>
                                <div>
                                    <img src={save} className='h-10 w-10 rounded-full'/>
                                </div>
                            </div>
                            <div className='text-xl'>save whatever you like.</div>
                        </div>

                        <div className='text- p-3 space-y-2 flex flex-col from-amber-50 to-zinc-600
                        bg-clip-text text-transparent bg-gradient-to-b'>
                            <div className='flex gap-3 items-center'>
                                <div>Share</div>
                                <div>
                                    <img src={share} className='h-10 w-10 rounded-full'/>
                                </div>
                            </div>
                            <div className='text-xl'> share your space with others.</div>
                        </div>

                    </div>
                </motion.div>

                <div className='flex flex-col mt-20 w-full '>
                    <Testimonials />
                </div>

                <div className='bg-zinc-950  w-full  mt-20'>
                       <Questions/>
                </div>
            </div>)
        }

        
    </div>
  )
}

export default Hero