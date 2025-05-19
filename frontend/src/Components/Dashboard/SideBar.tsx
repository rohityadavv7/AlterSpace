import  {  useState } from 'react'
import SideBarTabs from './SideBarTabs'
import X from '../Icons/X'
import Youtube from '../Icons/Youtube'
import Google from '../Icons/Google'
import {AnimatePresence, motion} from "motion/react"
import IconTab from './IconTab'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { contentAtom } from '../../Recoil/Atoms/ContentAtom'
import { filteredContentAtom } from '../../Recoil/Atoms/FilteredContentAtom'


function SideBar() {
  const[open,setOpen] = useState(false);

  const sideBarArr =["Twitter", "Youtube", "Google"]

  const sideBarVariants = {
    openSidebar:{
      width:"20rem"
    },
    closeSidebar:{
      width:"5rem"
    }
  }

  const childVariants = {
    openSidebar:{
      opacity:1,
      filter:"blur(0px)",
      y:0
    },
    closeSidebar:{
      opacity:0,
      filter:"blur(5px)",
      y:-20
    }
  }

  interface contentType{
    link:string,
    title:string,
    Linktype:string,
    addedBy:string
  }

  const [content, setContent] = useRecoilState(contentAtom);

  const setFilteredContent = useSetRecoilState(filteredContentAtom)

  
  function handleSideBar(text:any){

    console.log("type-> ", text)

    console.log("content in tabs-> ", content)
    let filteredContent = content;

    filteredContent = filteredContent.filter((c:contentType) => c.Linktype === text)

    setFilteredContent(filteredContent)

    console.log("filtered content-> ", filteredContent)
  }
  
 

  return (
    <motion.div 
    initial={false}
    variants={sideBarVariants}
    animate={open? "openSidebar":"closeSidebar"}
    
    className=' p-2 md:p-6 w-80  text-white  overflow-hidden  bg-zinc-950 font-["Neue_Montreal"]'>

        <div className='text-xs md:text-3xl flex justify-start md:justify-around items-center
         from-zinc-200 to-zinc-600
        bg-clip-text text-transparent bg-gradient-to-b
        font-["Neue_Haas_Grotesk_Text_Pro"] '>
            <div>
              {
                open ?
                (<div className='hidden sm:flex'>AlterSpace</div>)
                :
                (null)
              }
            </div>
            <button
            onClick={() => setOpen((prev) => (!prev))}>
            {
              open?
              (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-amber-50 size-6 md:size-8 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
              )
              :
              (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-amber-50 size-6 md:size-8 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

              )
            }
            </button>
            
        </div>

        <motion.div 
        
        className='mt-10 border-b-[0.1px]  border-zinc-500/40'>

        <AnimatePresence>
          {
            
            open?
            (
              <motion.div 
              variants={childVariants}>
                <div className=' text-md md:text-xl'>Socials</div>

                <motion.div 
               
                 
                className='mb-8 mt-6 items-center flex flex-col'>
                  <SideBarTabs icon={<X w={20} h={20}/>} text={sideBarArr[0]} onClick={() => {
                         handleSideBar(sideBarArr[0])
                  }}/>
                  <SideBarTabs icon={<Youtube w={23} h={23}/>} text={"Youtube"} onClick={() => {
                         handleSideBar(sideBarArr[1])
                  }}/>
                  <SideBarTabs icon={<Google w={27} h={27}/>} text={"Google"} onClick={() => {
                         handleSideBar(sideBarArr[2])
                  }}/>
                </motion.div>
              </motion.div>
            )
            :
            (<motion.div 
              variants={childVariants}>
                <motion.div 
                
  
                className='mb-8 mt-6'>
                    <IconTab icon={<X w={15} h={15}/>} />
                    <IconTab icon={<Youtube w={20} h={20}/>} />
                    <IconTab icon={<Google w={16} h={16}/>}/>
                </motion.div>
            </motion.div>)
            
          }
          </AnimatePresence>

           

        </motion.div >

    </motion.div>
  )
}

export default SideBar