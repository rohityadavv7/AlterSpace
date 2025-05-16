import React from 'react'

function FeatureCard() {
  return (
    <div className='w-full relative text-5xl  bg-white flex mx-auto font-["Neue_Haas_Grotesk_Text_Pro"]'>

        <div className='w-100 h-10 absolute -top-6 -z-10 bg-white'></div>

        <div className='grid items-center relative z-10 justify-center  grid-cols-3 w-full'>
            <div className=' text-center'>
                Like
            </div>
            <div className='text-center'>
                Save
            </div>
            <div className='text-center'>
                Share
            </div>
        </div>
    </div>
  )
}

export default FeatureCard