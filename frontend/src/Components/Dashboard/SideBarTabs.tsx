import React, { type ReactElement } from 'react'

interface dataType{
    icon:ReactElement,
    text:String
}

function SideBarTabs(props:dataType) {

    console.log(props)
    return (
    <div className=' w-25 md:w-60 p-1 md:p-2 items-center justify-center text-white mt-4 flex gap-2 md:gap-4 rounded-md outline-1 outline-amber-50/10'>
        <div  className=''>
            {props.icon}
        </div>

        <div>
            {props?.text}
        </div>
    </div>
  )
}

export default SideBarTabs