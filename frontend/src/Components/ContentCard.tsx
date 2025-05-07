import React,{useState} from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

interface cardData {
    title:String,
    linkType:String,
    addedBy:String,
    link:String
}



function ContentCard(props:cardData) {
    const [tweetLoaded, setTweetLoaded] = useState(false);

    const[fullContent, setFullContent] = useState(false);

    console.log(fullContent)


    function getTweetId(url: string) {
        const match = url.match(/status\/(\d+)/);
       
        return match ? match[1] : null;
    }

    const tweetId = getTweetId(props.link);
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

            <div>{props.title}</div>
            <div>
                {!tweetLoaded && (
                <div className="w-[17rem] h-[10rem] flex items-center justify-center
                bg-zinc-800 animate-pulse  rounded-md font-['Neue_Montreal']" >
                    Preparing your tweets...
                </div>
                )}

                {tweetId && (
                <div style={{ display: tweetLoaded ? 'visible' : 'hidden' }}>
                    <TwitterTweetEmbed
                    tweetId={tweetId}
                    onLoad={() => setTweetLoaded(true)}
                    />
                </div>
                )}

            </div>
            <div>{props.linkType}</div>
            
        
    </div>
  )
}

export default ContentCard