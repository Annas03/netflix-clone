import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.svg"

// 858px se neeche list show nhi krni

const NavBar = () => {
  const [browseClicked, setBrowseClicked] = useState(false)
  const [Offset, setOffset] = useState(0)

  const onBrowseClicked = () => {
    setBrowseClicked((previousState) => !previousState)
  }

  const onScroll = () => setOffset(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener('scroll',onScroll)
  },[])

  return (
    <div className={`flex w-full z-10 mx-auto ss:pt-2 2xl:pt-8 lg:pt-6 lg:pb-4 py-2 lg:pl-16 me:pl-8 pl-4 fixed ${(Offset !== 0)&&'bg-background'}`}>
      <img src={logo} className="xl:w-28 lg:w-24 w-16 md:w-24 ss:w-20 2xl:w-32"/>
      <button onClick={onBrowseClicked} className='me:hidden text-white lg:ml-16 ss:ml-6 ml-4 text-xs ss:text-sm md:text-base md:ml-8'>Browse</button>
      {browseClicked && <ul className='absolute rounded ml-20 mt-4 flex flex-wrap w-10 backdrop-blur-3xl text-ssm text-white'>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>My List</li>
      </ul>}
      <ul className='sm:hidden me:flex me:ml-20'>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>Home</li>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>TV Shows</li>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>Movies</li>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>News & Popular</li>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>My List</li>
        <li className='mr-4 lg:mr-8 text-white text-sm lg:text-base'>Browse by anguages</li>
      </ul>
    </div>
  )
}

export default NavBar