import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar"
import FeaturedMovie from "./components/FeaturedMovie"
import MovieList from "./components/MovieList"
import requests from "./request";


const App = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [movieOverview, setMovieOverview] = useState("")
  const [moviebackdrop, setMoviebackdrop] = useState("")
  const featuredMovie = () => {
    fetch("https://api.themoviedb.org/3" + requests.fetchTrending)
    .then(response => response.json())
    .then(data => {
      const {title,overview, backdrop_path} = data.results[Math.floor(Math.random() * 11)];
      setMovieTitle(title)
      setMovieOverview(overview)
      setMoviebackdrop(backdrop_path)
    })
  }
  useEffect(featuredMovie,[])

  return (
    <div id="body" className="h-max bg-background">
      <div id="header" className="relative h-4/5 bg-black shadow-Shadow">
        <NavBar/>
        <FeaturedMovie movieTitle={movieTitle} movieOverview={movieOverview}/>
        <img className="md:mb-8 max-h-fit" src={`https://image.tmdb.org/t/p/original${moviebackdrop}`}/>
      </div>
      <div id="netflix-originals">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Netflix Originals</h1>
        <MovieList fetchMovieList={requests.fetchNetflixOriginals} poster={`poster`}/>
      </div>
      <div id="Trending-Now">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Trending Now</h1>
        <MovieList fetchMovieList={requests.fetchTrending} poster={`backdrop`}/>
      </div>
      <div id="Top-Rated">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Top Rated</h1>
        <MovieList fetchMovieList={requests.fetchTopRated} poster={`backdrop`}/>
      </div>
      <div id="Action-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Action Movies</h1>
        <MovieList fetchMovieList={requests.fetchActionMovies} poster={`backdrop`}/>
      </div>
      <div id="Comedy-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Comedy Movies</h1>
        <MovieList fetchMovieList={requests.fetchComedyMovies} poster={`backdrop`}/>
      </div>
      <div id="Horror-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Horror Movies</h1>
        <MovieList fetchMovieList={requests.fetchHorrorMovies} poster={`backdrop`}/>
      </div>
      <div id="Documentaries-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Documentaries Movies</h1>
        <MovieList fetchMovieList={requests.fetchDocumentariesMovies} poster={`backdrop`}/>
      </div>
      <div id="Scifi-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Scifi Movies</h1>
        <MovieList fetchMovieList={requests.fetchScifiMovies} poster={`backdrop`}/>
      </div>
    </div>
  
  );
}

export default App;
