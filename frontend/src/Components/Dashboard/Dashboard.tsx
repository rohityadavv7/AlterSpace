import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import TopGradient from './TopGradient'
import Button from '../Button'
import ShareIcon from '../Icons/shareIcon'
import AddIcon from '../Icons/AddIcon'
import Skeleton from '../Skeleton'
import axios from 'axios'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { contentAtom } from '../../Recoil/Atoms/ContentAtom'
import { loadingAtom } from '../../Recoil/Atoms/LoadingAtom'
import ContentCard from '../ContentCard'
import { modalAtom } from '../../Recoil/Atoms/ModalAtom'
import Modal from '../../Modal/Modal'
import { tokenAtom } from '../../Recoil/Atoms/TokenAtom'
import ProfileIcon from '../Icons/ProfileIcon'
import { useNavigate } from 'react-router-dom'



function Dashboard() {

  const navigate = useNavigate()

  const[content, setContent] = useRecoilState(contentAtom)

  const[loading, setLoading] = useRecoilState(loadingAtom)

  const[modal,setModal] = useRecoilState(modalAtom)

  const setToken = useSetRecoilState(tokenAtom)

  console.log(modal)

  async function getContent():Promise<void>{

    try{
      setLoading(true);

      const token = localStorage.getItem("token")
      
      const response = await axios.get("http://localhost:3000/api/v1/content/getAllContent",{
        headers:{
          'X-Requested-With': 'XMLHttpRequest',
          Authorization:`Bearer ${token}`
        }
      })

      console.log("RESPONSE IN GETALLCONTENT-> ", response.data.allContent)

      setContent(response.data.allContent)

      // console.log("content-> ", content)

      setLoading(false);
    }catch(error){
      console.log("ERROR IN GET ALL CONTENT-> ", error);
    }

  }


  function handleLogout(){
    setLoading(true)
    setToken(null)
    localStorage.removeItem("token")
    navigate("/")
    setLoading(false)
  }

  function handleClick(){
    setLoading(false)
    navigate("/")
  }

  const token = localStorage.getItem("token")
  console.log("token-> ",token)

  useEffect(() => {
    getContent()
  },[setContent, setModal,modal])

  return (
    <div className='w-full  relative flex h-full bg-zinc-900'>
      {
        token ?
      
        (<div className='w-full  relative flex h-full bg-zinc-900 '>

          <div>
          {
            modal?
            (<Modal/>)
            :
            (null)
          }
          </div>
            
            <SideBar/>
            
    
            <div className='p-2 w-full'>
              {/* TOP-GRADIENT */}
                <div className='w-full h-30'>
                  <TopGradient/>
                </div>
    
              {/* RECENT-LOGS */}
                <div className='w-full flex flex-col md:flex-row md:justify-between items-center mt-2 border-b-[0.1px] p-5 border-zinc-600/30'>
                  <div className='flex flex-col md:flex-row gap-4'>
                    <Button title={"Share"} variant={"primary"} startIcon={<ShareIcon/>} />
    
                    <Button title={"Add Content"} variant={"secondary"} onClick={() => setModal(true)}
                    startIcon={<AddIcon/>}/>
                  </div>

                  <div className='mt-8'>
                    <Button variant={'secondary'} 
                    onClick={handleLogout}
                    title={`${token?"Logout":""}`}
                     startIcon={<ProfileIcon/> }/>
                  </div>
                </div>
    
                {/* MEDIA-LINKS-CONTENTS */}
    
                <div>
                    {
                      loading?
                      (<Skeleton/>)
                      :
                      (<div className='flex flex-col p-4 items-center md:flex-row flex-wrap gap-10 mt-10'>
                        {
                          content.map((content, index) => (
                            <ContentCard key={index}
                            title={content.title!}
                            addedBy={content.addedBy}
                            link={content.link}
                            linkType={content.linkType}/>
                          ))
                        }
                      </div>)
                    }
                </div>
            </div>
        </div>)
        :
        (<div className='w-full'>
              <div className='w-full h-30'>
                <TopGradient/>
              </div>

              <div className='mt-10 flex flex-col font-["Neue_Montreal"] items-center p-6 mx-auto rounded-2xl outline-1 outline-amber-50/10 
              md:h-80 md:w-180 w-90
               bg-zinc-800'>
                    {/* <div className='text-2xl text-amber-50/80 tracking-wider'>
                      Want to join our community?
                    </div> */}

                    <div className='mt-5 text-center text-2xl text-white/80'>
                      <div>Your mind deserves a second home, Build it in</div> 
                      <div className='text-6xl mt-8 font-["Neue_Haas_Grotesk_Text_Pro"] text-blue-400'>
                        Alterspace.
                        </div>
                    </div>

                    <div className='mt-10'>
                      <Button variant='primary' title={"Register Now!"} onClick={handleClick}/>
                    </div>
              </div>
        </div>)
      }
    </div>
  )
}

export default Dashboard