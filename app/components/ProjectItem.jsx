import React from 'react'
import Image from 'next/image'
const ProjectItem = ({image, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#000]'>
      <Image src={image} alt="/" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h2 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h2>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <a href="/">
          <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>More info</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItem