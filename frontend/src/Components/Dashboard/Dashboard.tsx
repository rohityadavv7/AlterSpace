import React from 'react'
import SideBar from './SideBar'
import TopGradient from './TopGradient'
import Button from '../Button'
import ShareIcon from '../Icons/shareIcon'
import AddIcon from '../Icons/AddIcon'

function Dashboard() {
  return (
    <div className='w-full flex h-full bg-zinc-900 '>
        
        <SideBar/>
        

        <div className='p-2 w-full'>
          {/* TOP-GRADIENT */}
            <div className='w-full h-30'>
              <TopGradient/>
            </div>

          {/* RECENT-LOGS */}
            <div className='w-full mt-2 border-b-[0.1px] p-5 border-zinc-600/30'>
              <div className='flex gap-4'>
                <Button title={"Share"} variant={"primary"} startIcon={<ShareIcon/>}/>

                <Button title={"Add Content"} variant={"secondary"} startIcon={<AddIcon/>}/>
              </div>
            </div>

            {/* MEDIA-LINKS-CONTENTS */}

            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Dashboard