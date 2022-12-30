import React, { useState } from 'react'
import logo from "../assets/logo.svg"

// 858px se neeche list show nhi krni

const NavBar = () => {
  const [browseClicked, setBrowseClicked] = useState(false)

  const onBrowseClicked = () => {
    setBrowseClicked((previousState) => !previousState)
  }

  return (
    <div className='flex w-11/12 lg:pt-6 pt-3 lg:pl-16 pl-4 absolute z-10'>
      <img src={logo} className="lg:w-24 w-16 2xl:w-28"/>
      <button onClick={onBrowseClicked} className='lg:hidden text-white lg:ml-16 ml-4 text-xs'>Browse</button>
      {browseClicked && <ul className='absolute rounded ml-20 mt-4 flex flex-wrap w-10 backdrop-blur-3xl text-ssm text-white'>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>My List</li>
      </ul>}
      <ul className='sm:hidden lg:flex lg:ml-20'>
        <li className='mr-4 lg:mr-8 text-white text-sm'>Home</li>
        <li className='mr-4 lg:mr-8 text-white text-sm'>TV Shows</li>
        <li className='mr-4 lg:mr-8 text-white text-sm'>Movies</li>
        <li className='mr-4 lg:mr-8 text-white text-sm'>News & Popular</li>
        <li className='mr-4 lg:mr-8 text-white text-sm'>My List</li>
        <li className='mr-4 lg:mr-8 text-white text-sm'>Browse by anguages</li>
      </ul>
    </div>
  )
}

export default NavBar