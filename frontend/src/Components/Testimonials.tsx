import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import ProfileIcon from './Icons/ProfileIcon'

function Testimonials() {
  return (
    <div className='flex relative flex-col p-5 md:p-20'>

        <div className='h-full w-50  -left-25 md:-left-0 inset-0 bg-zinc-950 blur-2xl absolute'></div>
        <div className='h-full w-50 inset-0 left-[20rem] md:left-[78rem]  bg-zinc-950 blur-2xl absolute'></div>
        <div className='text-8xl md:text-9xl text-center tracking-wide'>
            Testimonials
        </div>
        <div className='font-["Satoshi_Variable"] text-sm md:text-xl mt-2 text-zinc-500 text-center'>
            Discover how our product has made a positive 
            impact on our users' lives through<br/> their genuine experiences and heartfelt testimonials.
        </div>

        <div className='flex flex-col  mt-12 space-y-3'>
            <div>
                <div className='flex gap-4 shrink-0 whitespace-pre overflow-hidden'>
                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='Maria'
                        description={"I've never seen anything like this before. It's amazing. I love it."}
                        profileIcon={<ProfileIcon/>}
                        />
        
                    </div>

                    <div>
                        <TestimonialsCard
                        title='Jean'
                        description={"I don't know what to say. I'm speechless. This is amazing."}
                        profileIcon={<ProfileIcon/>}
                        />
                    </div>

                    <div>
                        <TestimonialsCard
                        title='Zeke'
                        description={"'m at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex gap-4 shrink-0 whitespace-pre overflow-hidden'>
                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>

                    <div>
                        <TestimonialsCard title='john' 
                        description={"I'm at a loss for words. This is amazing. I love it."}
                        profileIcon={<ProfileIcon/>}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials