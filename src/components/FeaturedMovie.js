import React, { useState } from 'react'

const FeaturedMovie = ({movieTitle, movieOverview}) => {
  return (
    <div className='xl:mt-56 xxl:mt-72 2xl:mt-80 lg:mt-44 me:mt-36 ss:mt-24 mt-14 ml-4 md:mt-32 lg:ml-16 ss:w-2/5 w-3/5 absolute me:ml-8'>
      <h1 className='2xl:text-8xl xl:text-7xl lg:text-5xl me:text-3xl ss:text-lg sn:text-base md:text-xl text-sm font-medium text-white drop-shadow-2xl'>{movieTitle}</h1>
      <p className='lg:mt-6 lg:my-4 my-1 lg:text-lg text-white 2xl:text-2xl lg:w-11/12 xl:text-xl sn:text-xs text-ssm md:text-sm me:text-base'>{movieOverview}</p>
      <div className='lg:mt-6 text-white md:mt-4'>
          <button className="border rounded backdrop-blur-lg lg:w-16 w-8 py-0.5 2xl:text-xl 2xl:w-28 2xl:py-2 lg:text-base xl:text-lg sn:text-xs text-ssm md:text-sm md:w-20">Play</button>
          <button className='border py-0.5 rounded ml-2 backdrop-blur-xl 2xl:text-xl 2xl:w-28 2xl:py-2 lg:w-24 w-10 xl:text-lg lg:text-base sn:text-xs sn:w-16 text-ssm md:text-sm md:ml-6 md:w-20'>More Info</button>
      </div>
    </div>
  )
}

export default FeaturedMovie