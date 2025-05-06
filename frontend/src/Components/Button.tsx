import React, { type ReactElement } from 'react'

interface btnProps{
    variant:"primary" | "secondary",
    title:String,
    startIcon:ReactElement
}

const btnVariant = {
    primary:"bg-[#297bdf] flex gap-2 text-white items-center px-6 py-2 rounded-lg",
    secondary:"bg-zinc-800 px-6 py-2 text-amber-50/80 flex gap-2 items-center rounded-lg"
}

function Button(props:btnProps) {
  return (
    <button>
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