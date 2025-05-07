import React, { type ReactElement } from 'react'

interface btnProps{
    variant:"primary" | "secondary",
    title:String,
    startIcon:ReactElement,
    onClick?:()=> void
}

const btnVariant = {
    primary:"bg-[#297bdf] flex gap-2 text-white text-center justify-center items-center px-6 py-2 rounded-lg cursor-pointer",
    secondary:"bg-zinc-800 px-6 py-2 text-amber-50/80 flex gap-2 items-center rounded-lg cursor-pointer"
}

function Button(props:btnProps) {
  return (
    <button onClick={props.onClick}>
        <div className={`${btnVariant[props.variant] }`}>
            <div>
                {props.startIcon}
            </div>
            <div>
                {props.title}
            </div>
        </div>
    </button>
  )
}

export default Button