import React,{type ReactElement} from 'react'


interface propsData{
    title?:string,
    description?:string,
    profileIcon?:ReactElement
}

function TestimonialsCard(props:propsData) {
  return (
    <div className='p-4 w-70 flex flex-col space-y-3  rounded-2xl whitespace-normal font-["Satoshi_Variable"] bg-zinc-800'>
        <div className='flex gap-4 items-center'>
            <div>{props.profileIcon}</div>
            <div>{props.title}</div>
        </div>

        <div className='break-words text-white/70'>
            {props.description}
        </div>
    </div>
  )
}

export default TestimonialsCard