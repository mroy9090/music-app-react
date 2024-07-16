//import React from 'react'
import { assets } from './../assets/assets';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
    const Navigate=useNavigate();
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>(Navigate(-1))} className='w-8 bg-black p-2  rounded-2xl cursor-pointer' src={assets.arrow_left}/>
                <img onClick={()=>(Navigate(+1))}  className='w-8 bg-black p-2  rounded-2xl cursor-pointer' src={assets.arrow_right}/>
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer'>
                    Explore Premium Edition
                </p>
                <p className='bg-black text-white text-[15px] py-1 px-3 rounded-2xl hidden md:block cursor-pointer'>
                    Install  App
                </p>
                <p className='bg-purple-800 text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer'>M.R.</p>

            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black justify-center px-3 py-1 rounded-2xl cursor-pointer'>ALL</p>
            <p className='bg-black text-white justify-center px-3 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black text-white justify-center px-3 py-1 rounded-2xl cursor-pointer'>Podcast</p>

        </div>
      
    </>
  )
}

export default navbar
