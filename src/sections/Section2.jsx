import illustrationAiContent from '../assets/images/illustration-ai-content.webp'
import illustrationCreatePost from '../assets/images/illustration-create-post.webp';

const Section2 = () => {
  return (
<div className='grid grid-cols-1 grid-rows-2 gap-4'>
    <div className='bg-yellow-100 rounded-xl p-4'>
        <h1 className='font-semibold text-[50px] leading-[50px] md:px-4 '>Create and schedule content
            <span className='text-purple-500 italic text-[50px] md:leading-[60px]'> quicker.</span>     
        </h1>
        <img 
            src={illustrationCreatePost} 
            alt="Create Post Illustration"
            className='mt-6 px-4' 
        />
        </div>
        <div className='bg-yellow-500 p-6 rounded-xl'>
          <h1 className='text-4xl font-sans font-medium md:text-[58px] md:leading-[54px]'>Write your content using AI</h1>
          <img 
            src={illustrationAiContent}
            className='pt-4'
          />

        </div>
        
        </div>
        
  )
}

export default Section2