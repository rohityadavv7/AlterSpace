import React, { useEffect } from 'react'
import TopGradient from '../Dashboard/TopGradient'
import { useRecoilState, useRecoilValue } from 'recoil'
import { linkAtom } from '../../Recoil/Atoms/LinkAtom'
import toast from 'react-hot-toast'
import { sharedContentAtom } from '../../Recoil/Atoms/SharedContentAtom'
import { loadingAtom } from '../../Recoil/Atoms/LoadingAtom'
import axios from 'axios'
import Skeleton from '../Skeleton'
import ContentCard from '../ContentCard'
import { useParams } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL;

function Share() {

    interface contentData{
        title:string,
        addedBy:string,
        link:string,
        Linktype:string
      }

    const {shareId} = useParams();
    console.log("shareId-> ", shareId)
    const link = `${apiUrl}/space/share/${shareId}`

    console.log(link)
    const[sharedContent, setSharedContent] = useRecoilState(sharedContentAtom)

    const [loading, setLoading] = useRecoilState(loadingAtom)

    async function getSharedSpaceContent(){
        try{
            setLoading(true)

            const response = await axios.get(link);
            
            console.log("RESPONSE FROM SHARED SPACE...", response.data.content);

            setSharedContent(response.data.content)

            console.log("shared contnet-> ",sharedContent)
            setLoading(false);
            toast.success("Fetched Shared Space")

        }catch(error){
            console.log("ERROR IN GETTING SHARED SPACE CONTENT...", error);
            toast.error("Failed to get content!")
        }
    }

    useEffect(() => {
        getSharedSpaceContent();
    },[])

  return (
    <div className='w-screen h-screen mx-auto'>
        <div>
            <TopGradient/>
        </div>

        <div>
            {
                loading ?
                (<div><Skeleton/></div>)
                :
                (<div className='flex flex-col  md:flex-row p-6 mt-10 gap-6'>
                    {
                        sharedContent.map((content:contentData,index) => (
                            <div>
                                <ContentCard key={index}
                                title={content?.title}
                                linkType={content?.Linktype}
                                addedBy={content?.addedBy}
                                link={content?.link}
                                />
                            </div>
                        ))
                    }
                </div>)
            }
        </div>
    </div>
  )
}

export default Share