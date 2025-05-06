import React, { type ReactElement } from 'react'


interface dataType{
    icon:ReactElement
}

function IconTab(props:dataType) {
  return (
    <div className='p-2 rounded-xl flex items-center border-amber-50/20 mt-4 border-[0.1px]'>
        {props.icon}
    </div>
  )
}

export default IconTab