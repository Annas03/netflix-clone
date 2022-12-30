import React, { useEffect, useState } from 'react'
import Movie from "./Movie"

const MovieList = ({fetchMovieList, poster}) => {

  const[Movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch("https://api.themoviedb.org/3" + fetchMovieList)
    .then(response => response.json())
    .then(data => setMovies(data.results.slice(0,10)))
  }
  useEffect(fetchMovies, [])

  return (
    <div className='text-white overflow-x-scroll md:scrollbar-hide me:pb-8 ml-2 mt-2 flex'>
      {Movies.map((item, i) => <Movie key={i} movie={item} p={poster}/>)}
    </div>
  )
}

export default MovieList