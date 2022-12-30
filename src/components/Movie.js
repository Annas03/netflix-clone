import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='w-20 inline-block flex-shrink-0 mx-1'>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    </div>
  )
}

export default Movie