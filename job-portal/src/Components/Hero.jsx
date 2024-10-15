import React from 'react'
import '../App.css'

const Hero = () => {
  return (
    <>
    <div className='image grid-rows-1 border-2 flex-column p-6 project-color w-3/4 hero-section container mx-auto px-4 mt-4'>

    <div className='sub-content'>
        <div className='flex flex-col justify-center align-middle  w-96'>
            <h1 className='text-4xl text-center font-semibold heading'>Find your dream job</h1>
        </div>
        <div className='flex flex-col justify-center align-middle  w-96 mt-5'>
            <input type="text" placeholder='search for companied,jobs, and more'/>
        </div>
            
        </div>
    </div>
    </>
  )
}

export default Hero
