import React from 'react'

const Movie = ({movie, p}) => {
  return (
    <div className={`w-24 ${(p === "poster") && 'w-16 xl:w-44 md:w-32 sn:w-20 ss:w-24 me:w-36 2xl:w-52 '} ss:w-32 sn:w-28 md:w-40 2xl:w-64 xl:w-56 me:w-44 inline-block flex-shrink-0 lg:mx-4 mx-1 md:mx-2`}>
      {(p === "poster")?<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>:
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>}
    </div>
  )
}

export default Movie