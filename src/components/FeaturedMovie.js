import React, { useState } from 'react'

const FeaturedMovie = ({movieTitle, movieOverview}) => {
  return (
    <div className=' lg:mt-56 mt-14 ml-4 lg:ml-16 w-2/5 absolute'>
      <h1 className='lg:text-8xl text-sm font-medium text-white drop-shadow-2xl'>{movieTitle}</h1>
      <p className='lg:mt-6 lg:my-4 my-1 lg:text-xl text-white lg:w-11/12 lg:font-medium text-ssm'>{movieOverview}</p>
      <div className='lg:mt-8 text-white'>
          <button className="border rounded backdrop-blur-lg lg:w-16 w-8 py-0.5 lg:font-medium text-ssm transition duration-300 ease-in-out">Play</button>
          <button className='border py-0.5 rounded lg:ml-6 ml-2 backdrop-blur-xl lg:w-24 w-10 lg:font-medium text-ssm transition duration-300 ease-in-out'>More Info</button>
      </div>
    </div>
  )
}

export default FeaturedMovie