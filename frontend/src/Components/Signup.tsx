import { useForm } from 'react-hook-form';
import {motion, useTime, useTransform} from "motion/react"
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loader from "./Loader";
import { useRecoilState } from 'recoil';
import { loadingAtom } from '../Recoil/Atoms/LoadingAtom';


function Signup() {

  const {register,handleSubmit} = useForm()

  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
 
  const time = useTime()

  const rotate = useTransform(time,[0,3000],[0,360],{
    clamp:false
  })

  const bgRotate = useTransform(rotate,(r) => {
    return `conic-gradient(from ${r}deg,#000,#381767)`
  })

  const navigate = useNavigate()

  const[loading, setLoading] = useRecoilState(loadingAtom)

  interface dataType{
    username:String,
    password:String
  }

  async function Signup(data: dataType):Promise<void>{
    try{
        setLoading(true);
        const username = data.username;
        const password = data.password;

        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,password
        })

        console.log("RESPONSE-> ", response.data)
        setLoading(false);
        navigate("/");

    }
    catch(error){
        setLoading(false)
        console.log("ERROR IN SIGNUP API-> ", error);
        navigate("/signup")
    }
  }

  return (
    <div className="flex relative w-full h-full overflow-hidden font-['Neue_Haas_Grotesk_Text_Pro'] bg-newBlack">
        <div className="w-[70%] -left-20  h-[130%] -bottom-50 z-10 blur-3xl  bg-new-violet-400 rotate-90 rounded-full absolute">hi there</div>
        <div className="w-[70%] -left-20  h-[130%] -bottom-90 z-10 blur-3xl  bg-new-violet-600 rotate-90 rounded-full absolute">hi there</div>
        <div className="w-[70%] -left-20  h-[130%] -bottom-120 z-10 blur-3xl  bg-new-violet-800 rotate-90 rounded-full absolute">hi there</div>
        <div className="w-[70%] -left-20  h-[130%] -bottom-150 z-10 blur-3xl  bg-newBlack rotate-90 rounded-full absolute">hi there</div>
        

        {/* LEFT-SECTION */}
        <div className=" relative hidden md:w-[60%] md:justify-end rounded-t-3xl md:items-center md:flex  flex-col  bg-new-violet-200 overflow-hidden h-full">
           <div className="w-[60%] flex flex-col space-y-0 p-10 items-center text-white  z-100">
                <div className="flex relative items-center flex-col text-white">
                    <span className=" absolute -top-20 text-[6rem]">Join the</span>
                 
                    <div className="text-[14rem] from-white to-newBlack
                    bg-clip-text text-transparent bg-gradient-to-b">Space</div>   
                </div>  

                <div className="text-zinc-500 w-full text-center font-['Neue_Montreal'] tracking-wide">
                    AltSpace helps you build a personal knowledge system for<br/><span className='text-violet-800'> thinking, learning, <span className='text-zinc-500'>and</span> creating.</span>
                </div>
            </div> 
        </div>

        {/* RIGHT-SECTION */}
        <div className="w-full md:w-[40%] flex items-center bg-newBlack font-['Neue_Montreal'] z-100">
          <div className="w-[76%] h-[80%] md:h-[88%] p-4 mx-auto outline-1 overflow-hidden outline-amber-50/20 relative rounded-2xl">
            <div className="absolute h-100 w-100 left-1/2 -top-40 blur-3xl -translate-x-[50%] rounded-full bg-white/10"></div>
            <div className="text-white  flex flex-col items-center">

              <div className='text-5xl mt-4 
              bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 via-zinc-600 to-zinc-500
              font-["Neue_Haas_Grotesk_Text_Pro"] z-100 t'>AltSpace</div>

              <div className='mt-4 p-4 flex items-center space-x-4 '>
                <div className='rounded-full  p-4 outline-1 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-11">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>


              </div>
              

              <div className='mt-2 text-sm md:text-md text-zinc-400'>please enter your details to sign up with us.</div>

              <div className='flex mt-6 flex-col w-[85%]'>
                <form onSubmit={handleSubmit(Signup as any)} 
                className='flex flex-col space-y-5 z-100 text-xl'>
                  <label>
                    <div className='font-["Neue_Haas_Grotesk_Text_Pro"]/40 tracking-wider text-white/80 '>Username :</div>
                    <input type='text'
                    className='w-full py-2 mt-2 px-6 outline-1 f outline-amber-50/40 rounded-xl'
                    placeholder='username...' {...register("username")}/>
                  </label>

                  <label>
                  <div className='font-["Neue_Haas_Grotesk_Text_Pro"]/40 tracking-wider text-white/80'>Password :</div>
                    <input type={showPass? "text":"password"}
                    className='w-full py-2 mt-2 px-6 outline-1 outline-amber-50/40  rounded-xl'
                    placeholder='password...' {...register("password")}/>
                    {
                        showPass?
                        (<svg onClick={() => setShowPass((prev)=> !prev)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-zinc-500 cursor-pointer size-6 relative -right-50 -top-8.5 md:-right-75">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>)
                        :
                        (<svg onClick={() => setShowPass((prev)=> !prev)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-zinc-500 cursor-pointer size-6 relative -top-8.5 -right-50 md:-right-75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>)
                    }
                  </label>

                  <label>
                  <div className='font-["Neue_Haas_Grotesk_Text_Pro"]/40 tracking-wider text-white/80'>Confirm Password :</div>
                    <input type={showConfirmPass?"text":"password"}
                    className='w-full py-2 mt-2 px-6 outline-1 outline-amber-50/40  rounded-xl'
                    placeholder='confirm password...' {...register("confirmpassword")}/>
                    {
                        showConfirmPass?
                        (<svg onClick={() => setShowConfirmPass((prev)=> !prev)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-zinc-500 cursor-pointer size-6 relative -top-8.5 -right-50">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>)
                        :
                        (<svg onClick={() => setShowConfirmPass((prev)=> !prev)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-zinc-500 cursor-pointer size-6 relative -top-8.5 -right-50 md:-right-75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>)
                    }
                  </label>

                  <motion.div className='relative'>

                    <motion.div 
                    style={{
                      background:bgRotate,
                      filter:"blur(2px)"
                    }}
                    className='absolute rounded-2xl -inset-1'>
                    
                    </motion.div>

                    <motion.button 
                    whileTap={{scale:0.9}}
                    className=' w-full 
                    cursor-pointer text-zinc-200 px-8 py-2 text-xl bg-zinc-900  relative  rounded-2xl'
                    type='submit'>
                        {
                            loading?
                            (<div className='ml-30'><Loader/></div>)
                            :
                            ("Sign up")
                        }
                    </motion.button>
                  </motion.div>
                  
                </form>

                <div className='mt-4 mx-auto'>
                  <div className='text-zinc-400'>
                    already Registered with us? 
                    <NavLink to="/">
                        <span className='ml-2 hover:text-new-violet-400 transition-all duration-300
                        cursor-pointer'>
                        Log in
                        </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup