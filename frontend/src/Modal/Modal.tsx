import React, { useState } from 'react'
import X from '../Components/Icons/X'
import Youtube from '../Components/Icons/Youtube'
import Google from '../Components/Icons/Google'
import {easeIn, motion} from "motion/react"
import Close from '../Components/Icons/Close'
import { useSetRecoilState } from 'recoil'
import { modalAtom } from '../Recoil/Atoms/ModalAtom'
import Button from '../Components/Button'
import AddIcon from '../Components/Icons/AddIcon'
import {useForm} from "react-hook-form"
import axios from 'axios'
import { loadingAtom } from '../Recoil/Atoms/LoadingAtom'
import toast from 'react-hot-toast'

function Modal() {

    const[selectedLink, setSelectedLink] = useState("");

    const setModal = useSetRecoilState(modalAtom)

    const setLoading = useSetRecoilState(loadingAtom)

    const {register, handleSubmit} = useForm();

    interface addData{
        title:String,
        link:String,
      
    }

    async function addContent(data:addData):Promise<void>{

        setLoading(true);
        
        try{
            const link = data.link;
            const title = data.title;

            console.log(link,title)

            const token = localStorage.getItem("token")

            const linkType:String = selectedLink;

            console.log("selected-> ", selectedLink)
            
            const response = await axios.post("http://localhost:3000/api/v1/content/createContent",{
                title,
                link,
                linkType
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            console.log("RESPONSE IN ADDING CONTENT-> ", response.data)

            if(response.data.success){
                toast.success("Content Added!")
            }

            setLoading(false);
            setModal(false);


        }catch(error){
            console.log("ERROR IN ADDING CONTENT-> ", error)
            toast.error("Failed to add!")
            setLoading(false);
            setModal(false)

        }
    }

  return (
    <div className='bg-zinc-900/90 absolute flex items-center z-100 justify-center h-screen  w-screen'>
        <div className='w-70 h-70 rounded-full absolute bg-[#2F3737]/50 left-60 bottom-0 blur-3xl'></div>
        
        
        <motion.div 
        initial={{ opacity:0, filter:"blur(10px)"}}
        animate={{ opacity:1, filter:"blur(0px)"}}
        transition={{duration:0.1, ease:easeIn}}
        exit={{filter:"blur(10px)", opacity:0}}
        className='w-120 h-150 bg-[#29272A]/50 outline-1 outline-zinc-500/40 rounded-2xl z-100'>

            <div className='text-white p-6 w-full tracking-wide font-["Neue_Montreal"]'>

            <div className='flex text-fuchsia-50/70 
            mb-6 justify-between items-center text-2xl' >
                <div>Add Content to you Space</div>
                <div onClick={() => setModal(false)}
                className='cursor-pointer text-2xl hover:text-amber-50'><Close/></div>
            </div>

               <form onSubmit={handleSubmit(addContent)}
               className='flex flex-col space-y-12 mt-10'>
                    <label className=''>
                        <div className='mb-3'>Link :</div>
                        <input {...register("link")}
                        className='px-6 py-2 outline-1 w-full bg-zinc-600/20 outline-zinc-300/10 text-zinc-200 rounded-xl'
                        placeholder='enter the link..' />
                    </label>

                    <label>
                        <div className='mb-3 '>Title :</div>
                        <input {...register("title")}
                        className='px-6 py-2 outline-1 w-full bg-zinc-600/20 outline-zinc-300/10 text-zinc-200 rounded-xl'
                        placeholder='enter the title..' />
                    </label>

                    <label>
                        <div className='mb-3'>Platform :</div>

                        <div className='flex items-center justify-around mt-6'> 
                            <motion.div
                            style={{
                                opacity: selectedLink === "Twitter" ? 0.4 : 1,
                                transition: 'filter 0.3s',
                                scale:0.9
                              }}
                              className='shrink-0'
                            onClick={()=> setSelectedLink("Twitter")}
                            whileTap={{ scale:0.8}}
                            >
                                <X w={40} h={40}/>
                                <div className={`transitiion-all duration-300
                                ${selectedLink === "Twitter"?"scale-x-100 origin-left":"scale-x-0"}
                                 h-0.5 w-full bg-white mt-4`}></div>
                            </motion.div>

                            <motion.div
                            style={{
                                filter: selectedLink === "Youtube" ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.3s',
                                scale:0.9
                              }}
                            onClick={()=> setSelectedLink("Youtube")}
                            whileTap={{ scale:0.8}}
                            >
                                <Youtube w={55} h={55}/>
                                <div className={`transitiion-all duration-300
                                ${selectedLink === "Youtube"?"scale-x-100 origin-left":"scale-x-0"}
                                 h-0.5 w-full bg-white mt-4`}></div>
                            </motion.div>

                            <motion.div
                            style={{
                                filter: selectedLink === "Google" ? 'grayscale(1)' : 'none',
                                transition: 'filter 0.3s',
                                scale:0.9
                              }}
                            onClick={()=> setSelectedLink("Google")}
                            whileTap={{ scale:0.8}}
                            >
                                <Google w={43} h={43}/>
                                <div className={`transitiion-all duration-300
                                ${selectedLink === "Google"?"scale-x-100 origin-left":"scale-x-0"}
                                 h-0.5 w-full bg-white mt-4`}></div>
                            </motion.div>
                        </div>
                        
                    </label>

                    

                    <button type='submit'
                    className='mt-2 items-center flex justify-center w-full'>
                        <Button
                        variant='primary' 
                        title={"Add Content"} startIcon={<AddIcon/>}/>
                    </button>


               </form>
            </div>

        </motion.div>
    </div>
  )
}

export default Modal