import React from 'react'
import illustrationFiveStars from '../assets/images/illustration-five-stars.webp';
import illustrationMultiplePlatforms from  '../assets/images/illustration-multiple-platforms.webp'
import illustraionConsistentSchedule from '../assets/images/illustration-consistent-schedule.webp'
import illustrationSchedulePosts from '../assets/images/illustration-schedule-posts.webp'
import illustrationAudienceGrowth from '../assets/images/illustration-audience-growth.webp'
import illustrationGrowFollowers from '../assets/images/illustration-grow-followers.webp'

const Section1 = () => {
  return (

    // main section
    <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row'>
        <div className='grid md:grid-rows-[55%_45%] col-span-2 row-span-2 gap-4'>
            <div className='bg-purple-500 md:col-span-2 md:mr-4 md:pt-14 rounded-lg p-4 justify-center'>
                    <div className='items-center text-center  pt-6 pb-4'>
                        <h1 className=' text-5xl md:text-7xl font-semibold text-white'>Social Media 
                        <span className='text-yellow-500'> 10x </span>
                        Faster with AI
                        </h1>
                    </div>
                    <div className='p-2 flex-col flex-1 flex items-center'>
                        <img 
                            src={illustrationFiveStars}
                            alt='Five Stars'
                            width={180}
                            height={180}
                        />
                    </div>
                    <p className='text-white text-center text-lg pb-2'>Over 4000 5-star reviews</p>
                </div>

                {/* middle section */}
            <div className='md:relative grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-4 md:mr-4 md:mb-4 '>
                
                <div className='bg-white col-start-1 md:overflow-hidden shadow-sm rounded-lg '>
                        <img 
                            src={illustrationMultiplePlatforms}
                            alt='Multiple Platforms'
                            className='pt-4 md:pt-8 md:translate-x-8'
                        />
                    <h2 className='p-4 font-sans font-medium text-2xl md:text-[46px] leading-10'>Manage multiple accounts and platforms.</h2>
                </div>

                <div className='bg-yellow-500 col-start-1 md:col-start-2 rounded-lg overflow-hidden'>
                    <h2 className='p-6 font-sans font-medium text-2xl md:text-5xl'>Maintain a consistent posting schedule.</h2>
                    <div className='flex md:items-center md:justify-center'>
                    <img 
                        src={illustraionConsistentSchedule}
                        alt='Consistent Schedule'
                        width={280}
                        height={280}
                        className='pl-6 object-left md:items-center'
                    />
                     </div>   
                </div>

            </div>
        </div>
        {/* right section */}
        <div className='bg-purple-100 col-start-1 md:col-start-3 row-span-2 relative overflow-hidden gap-4 mt-4 md:mt-0 rounded-xl'>
            <div className='flex flex-col'>
            <div>
            <h2 className='pt-10 p-5 font-sans font-medium md:text-5xl text-2xl'>Schedule to social media.</h2></div>
            <div className='md:py-4'>
            <img 
                src={illustrationSchedulePosts}
                alt='Schedule Posts'
            
                className='md:right-0 transform md:translate-x-10 md:h-80 px-4'
            /></div>
            <div>
            <p className='p-6 font-sans font-medium md:text-[28px] text-[18px] text-center'>Optimize post timings to publish content at teh perfect time for your audience.</p>

            </div>
            </div>
            </div>
    <div className='grid col-span-3 mt-4 gap-4'>
        <div className='bg-white order-2 md:order-none p-4 shadow-sm rounded-xl'>
            <h1 className='text-3xl pb-2 font-sans font-semibold'>&gt;56%</h1>
            <p>faster audience growth</p>
            <div className='pt-4 w-40'>
            <img 
                src={illustrationAudienceGrowth}

            />
            </div>
        </div>
        <div className="bg-purple-500 md:col-start-2 md:col-span-7 order-1 md:order-none rounded-xl md:px-4 pb-4 flex md:flex-row flex-col items-center md:items-center">
    <div className="w-60 h-60 flex items-center justify-center">
        <img 
            src={illustrationGrowFollowers}
            alt="Grow Followers"
            className="mx-auto"
        />
    </div>
    <div className="flex items-center">
        <h2 className="text-white text-4xl md:text-4xl text-center leading-9 md:text-left md:pl-4">
            Grow followers with non-stop content.
        </h2>
    </div>
</div>
        </div>
    </div>
  )
}

export default Section1




    {/* bottom section */}
    
    