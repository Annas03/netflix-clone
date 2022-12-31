import React, { useEffect, useState } from 'react'
import Movie from "./Movie"

const MovieList = ({fetchMovieList, poster, id}) => {

  const[Movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch("https://api.themoviedb.org/3" + fetchMovieList)
    .then(response => response.json())
    .then(data => setMovies(data.results.slice(0,20)))
  }

  useEffect(fetchMovies, [])

  return (
    <div id={`${id}`} className='scroll-smooth text-white overflow-x-scroll me:scrollbar-hide me:pb-8 ml-2 mt-2 flex'>
      {Movies.map((item, i) => <Movie key={i} movie={item} p={poster}/>)}
    </div>
  )
}

export default MovieList