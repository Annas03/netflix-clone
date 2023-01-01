import React, { useEffect, useState } from 'react'
import Movie from "./Movie"
import YouTube from 'react-youtube';

const MovieList = ({fetchMovieList, poster, id}) => {

  const[Movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState({id:"", movie_trailer:"", movie:0})

  const fetchMovies = () => {
    fetch("https://api.themoviedb.org/3" + fetchMovieList)
    .then(response => response.json())
    .then(data => setMovies(data.results.slice(0,20)))
  }

  useEffect(fetchMovies, [])

  const opts = {
    height:"390px",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  }

  return (
    <div>
      <div id={`${id}`} className='z-0 scroll-smooth text-white overflow-x-scroll me:scrollbar-hide me:pb-8 ml-2 mt-2 flex'>
      {Movies.map((item, i) => <Movie key={i} movie={item} p={poster} id={id} trailer={trailer} setTrailer={setTrailer}/>)}
      </div>
      {(trailer.id === id && trailer.movie_trailer !== "") && <YouTube videoId={trailer.movie_trailer} opts={opts}/>}
    </div>
  )
}

export default MovieList