import React from 'react'
import movieTrailer from 'movie-trailer'

const Movie = ({movie, p, id, setTrailer, trailer}) => {
  const movieClicked = async () => {
    if(trailer.movie !== movie.id){
      const trailerurl = await movieTrailer(null, {tmdbId: movie.id})
      const url =new URLSearchParams(new URL(trailerurl).search)
      setTrailer({id:id, movie_trailer:url.get('v'), movie:movie.id})
    }
    else{
      setTrailer({id:id, movie_trailer:"", movie:0})
    }
  }
  return (
    <button className={`w-24 ${(p === "poster") && 'w-16 xl:w-44 md:w-32 sn:w-20 ss:w-24 me:w-36 2xl:w-52 '} ss:w-32 sn:w-28 md:w-40 2xl:w-64 xl:w-56 me:w-44 flex-shrink-0 lg:mx-4 mx-1 md:mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`} onClick={()=>{movieClicked(movie.title)}}>
      {(p === "poster")?<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>:
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}/>}
    </button>
  )
}

export default Movie