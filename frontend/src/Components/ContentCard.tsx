import React,{useState} from 'react'
import ContentType from './ContentType';

interface cardData {
    title:string,
    linkType:string,
    addedBy:string,
    link:string
}



function ContentCard(props:cardData) {
    

    const[fullContent, setFullContent] = useState(false);

    // console.log(fullContent)


    
  return (
    <div className={`${fullContent? "min-h-70":"overflow-hidden h-70"} min-w-70 relative 
     text-white/70 items-center flex flex-col  w-40 border-[0.1px] rounded-xl
     shadow-zinc-500/10 shadow-sm border-zinc-500/10`}>
            <div
                className={`absolute bottom-2 right-6 z-20 bg-zinc-900 text-blue-500 px-3 py-1 rounded-xl
                text-sm cursor-pointer hover:scale-95 transition-transform duration-200`}
                onClick={() => setFullContent((prev) => !prev)}
                >
                {fullContent ? "collapse" : "view"}
            </div>
            {!fullContent && (
                <div className="rounded-xl absolute
                    h-70 w-70 bg-gradient-to-t from-zinc-900 to-white/10
                    flex justify-start items-end px-6 py-3 text-md z-10">
                        <span className="left-0">added by : <span className="text-new-violet-400">{props.addedBy}</span></span>
            </div>
            )}

            <div className='text-xl font-["Grenette"] text-blue-600'>{props.title}</div>
            
            <div>
                <ContentType link={props.link} linkType={props.linkType} title={props.title}/>
            </div>

            <div>{props.linkType}</div>
            
        
    </div>
  )
}

export default ContentCard