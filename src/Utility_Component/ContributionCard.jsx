import React from 'react'

export default function ContributionCard({TopContributers, i}) {
  console.log(TopContributers.UserName)
  return (
    <div className="w-full max-w-sm bg-transparent hover:bg-[#161616] rounded-full shadow-lg transition delay-100 ease-in-out cursor-pointer">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center">
        <img className="w-14 h-14  mb-3 rounded-full shadow-lg" src={TopContributers.UserImage} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium  text-white"><span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-400'>{i}</span> {TopContributers.UserName}</h5>
        <span className="text-md text-gray-500 dark:text-gray-400">Posts: {TopContributers.NoOfPosts}</span>
    </div>
</div>
  )
}
