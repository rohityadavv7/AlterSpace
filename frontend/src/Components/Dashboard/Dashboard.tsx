import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import TopGradient from './TopGradient'
import Button from '../Button'
import ShareIcon from '../Icons/shareIcon'
import AddIcon from '../Icons/AddIcon'
import Skeleton from '../Skeleton'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { contentAtom } from '../../Recoil/Atoms/ContentAtom'
import { loadingAtom } from '../../Recoil/Atoms/LoadingAtom'
import ContentCard from '../ContentCard'
import { modalAtom } from '../../Recoil/Atoms/ModalAtom'
import Modal from '../../Modal/Modal'



function Dashboard() {

  const[content, setContent] = useRecoilState(contentAtom)

  const[loading, setLoading] = useRecoilState(loadingAtom)

  const[modal,setModal] = useRecoilState(modalAtom)

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

  useEffect(() => {
    getContent()
  },[setContent, setModal,modal])

  return (
    <div className='w-full  relative flex h-full bg-zinc-900 '>

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
            <div className='w-full mt-2 border-b-[0.1px] p-5 border-zinc-600/30'>
              <div className='flex gap-4'>
                <Button title={"Share"} variant={"primary"} startIcon={<ShareIcon/>} />

                <Button title={"Add Content"} variant={"secondary"} onClick={() => setModal(true)}
                startIcon={<AddIcon/>}/>
              </div>
            </div>

            {/* MEDIA-LINKS-CONTENTS */}

            <div>
                {
                  loading?
                  (<Skeleton/>)
                  :
                  (<div className='flex flex-wrap gap-10 mt-10'>
                    {
                      content.map((content, index) => (
                        <ContentCard key={index}
                        title={content.title}
                        addedBy={content.addedBy}
                        link={content.link}
                        linkType={content.linkType}/>
                      ))
                    }
                  </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard