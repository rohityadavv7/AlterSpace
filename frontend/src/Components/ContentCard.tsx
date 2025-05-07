import React from 'react'

interface cardData {
    title:String,
    linkType:String,
    addedBy:String,
    link:String
}

function ContentCard(props:cardData) {
  return (
    <div className='min-h-70 min-w-70 text-white/70 items-center flex flex-col  w-40 border-[0.1px] shadow-zinc-500/10 shadow-sm border-zinc-500/10'>
        <div>{props.title}</div>
        <div>{props.link}</div>
        <div>{props.linkType}</div>
        <div>{props.addedBy}</div>
    </div>
  )
}

export default ContentCard