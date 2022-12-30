import React from 'react'

const Movie = ({movie, p}) => {
  return (
    <div className={`w-24 ${(p === "poster") && 'w-16 xl:w-44 me:w-36'} xl:w-56 me:w-44 inline-block flex-shrink-0 mx-1`}>
      {(p === "poster")?<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>:
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>}
    </div>
  )
}

export default Movie