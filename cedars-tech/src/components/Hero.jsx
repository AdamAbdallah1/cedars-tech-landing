import React from 'react'

const Hero = () => {
  return (
    <div className='w-full lg:mt-20 flex flex-col gap-10 justify-center items-center p-10'>
        <h1 className='text-5xl font-inter'>Affordable <span className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tight text-transparent'>Streaming</span> Services Made Simple</h1>
        <p>Cedars Tech helps you enjoy premium streaming at the best price</p>
        <div>
             <button className='bg-indigo-700 p-4 rounded-2xl hover:bg-indigo-900 cursor-pointer'><a href="">Contact Us on WhatsApp</a></button>
        </div>
    </div>
  )
}

export default Hero