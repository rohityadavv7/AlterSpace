import React,{useState} from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';



interface contentProps{
    linkType:string,
    link:string
    title:string
}

function ContentType(props:contentProps) {

    const [postLoaded, setPostLoaded] = useState(false);
    
    function getTweetId(url: string) {
        const match = url.match(/status\/(\d+)/);
       
        return match ? match[1] : null;
    }

    function getYouTubeVideoId(url: string): string | null {
        const match = url.match(
          /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        return match ? match[1] : null;
      }
    
    const youtubeId = getYouTubeVideoId(props.link)

    const tweetId = getTweetId(props.link);
    // console.log(tweetId)
  return (
    <div>
        {
            props.linkType === "Twitter"?
            (<div>
                {!postLoaded && (
                <div className="w-[17rem] h-[10rem] flex items-center justify-center
                bg-zinc-800 animate-pulse  rounded-md font-['Neue_Montreal']" >
                    Preparing your tweets...
                </div>
                )}

                {tweetId && (
                <div style={{ display: postLoaded ? 'visible' : 'hidden' }}>
                    <TwitterTweetEmbed
                    tweetId={tweetId}
                    onLoad={() => setPostLoaded(true)}
                    />
                </div>
                )}

            </div>)
            :
            (<div className='mt-10'>
                  {!postLoaded && (
                    <div className="w-[17rem] h-[10rem] flex items-center justify-center
                    bg-zinc-800 animate-pulse  rounded-md font-['Neue_Montreal']" >
                        Preparing your post...
                    </div>
                    )}

                    {youtubeId && (
                        <iframe
                        className="w-full h-[20rem] rounded-md"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                       
                        onLoad={() => setPostLoaded(true)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    )}

                </div>)
        }
    </div>
  )
}

export default ContentType