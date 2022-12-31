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
  const leftClick = (id) => {
    document.getElementById(`${id}`).scrollLeft -= 400
  }
  const rightClick = (id) => {
    document.getElementById(`${id}`).scrollLeft += 400
  }
  useEffect(featuredMovie,[])

  return (
    <div id="body" className="h-max bg-background">
      <div id="header" className="relative max-h-128 bg-black shadow-Shadow overflow-hidden">
        <NavBar/>
        <FeaturedMovie movieTitle={movieTitle} movieOverview={movieOverview}/>
        <img className="md:mb-8 max-h-fit" src={`https://image.tmdb.org/t/p/original${moviebackdrop}`}/>
      </div>
      <div id="netflix-originals" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Netflix Originals</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-40 me:pt-24 absolute">
          <button className="bg-background py-10 px-2" onClick={()=>{leftClick('one')}}>left</button>
          <button className="bg-background py-10 px-2" onClick={()=>{rightClick('one')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchNetflixOriginals} id={'one'} poster={`poster`}/>
      </div>
      <div id="Trending-Now">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Trending Now</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('two')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('two')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchTrending} id={'two'} poster={`backdrop`}/>
      </div>
      <div id="Top-Rated">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Top Rated</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('three')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('three')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchTopRated} id={'three'} poster={`backdrop`}/>
      </div>
      <div id="Action-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Action Movies</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('four')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('four')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchActionMovies} id={'four'} poster={`backdrop`}/>
      </div>
      <div id="Comedy-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Comedy Movies</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('five')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('five')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchComedyMovies} id={'five'} poster={`backdrop`}/>
      </div>
      <div id="Horror-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Horror Movies</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('six')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('six')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchHorrorMovies} id={'six'} poster={`backdrop`}/>
      </div>
      <div id="Documentaries-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Documentaries Movies</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('seven')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('seven')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchDocumentariesMovies} id={'seven'} poster={`backdrop`}/>
      </div>
      <div id="Scifi-Movies">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Scifi Movies</h1>
        <div id="button-div" className="hidden me:flex text-white w-full justify-between px-1 mx-auto xl:pt-16 me:pt-8 absolute">
          <button className="bg-background py-4 px-2" onClick={()=>{leftClick('eight')}}>left</button>
          <button className="bg-background py-4 px-2" onClick={()=>{rightClick('eight')}}>right</button>
        </div>
        <MovieList fetchMovieList={requests.fetchScifiMovies} id={'eight'} poster={`backdrop`}/>
      </div>
    </div>
  
  );
}

export default App;
