import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar"
import FeaturedMovie from "./components/FeaturedMovie"
import MovieList from "./components/MovieList"
import requests from "./request";
import backArrow from "./assets/back-arrow.svg"
import frontArrow from "./assets/caret-right.svg"


const App = () => {
  const [movieTitle, setMovieTitle] = useState("")
  const [movieOverview, setMovieOverview] = useState("")
  const [moviebackdrop, setMoviebackdrop] = useState("")
  const doc = document.getElementById('one')

  const featuredMovie = () => {
    fetch("https://api.themoviedb.org/3" + requests.fetchTrending)
    .then(response => response.json())
    .then(data => {
      const {title,overview, backdrop_path,name} = data.results[Math.floor(Math.random() * 11)];
      (title === undefined) ? setMovieTitle(name) : setMovieTitle(title)
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
      <div id="header" className="relative max-h-128 bg-background shadow-Shadow overflow-hidden">
        <NavBar/>
        <FeaturedMovie movieTitle={movieTitle} movieOverview={movieOverview}/>
        <img className="md:mb-8 max-h-fit" src={`https://image.tmdb.org/t/p/original${moviebackdrop}`}/>
      </div>
      <div id="netflix-originals" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Netflix Originals</h1>
        <button className={`hidden me:flex z-10 absolute left-2 me:top-36 xl:top-52 py-6 backdrop-blur-2xl rounded border-2 border-background`} onClick={()=>{leftClick('one')}}><img src={backArrow}/></button>
        <button className="hidden me:flex z-10 absolute right-1 me:top-36 xl:top-52 w-8 py-6 backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('one')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchNetflixOriginals} id={'one'} poster={`poster`}/>
      </div>
      <div id="Trending-Now" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Trending Now</h1>
          <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('two')}}><img src={backArrow}/></button>
          <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('two')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchTrending} id={'two'} poster={`backdrop`}/>
      </div>
      <div id="Top-Rated" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Top Rated</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('three')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('three')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchTopRated} id={'three'} poster={`backdrop`}/>
      </div>
      <div id="Action-Movies" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Action Movies</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('four')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('four')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchActionMovies} id={'four'} poster={`backdrop`}/>
      </div>
      <div id="Comedy-Movies" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Comedy Movies</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('five')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('five')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchComedyMovies} id={'five'} poster={`backdrop`}/>
      </div>
      <div id="Horror-Movies" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Horror Movies</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('six')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('six')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchHorrorMovies} id={'six'} poster={`backdrop`}/>
      </div>
      <div id="Documentaries-Movies" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Documentaries Movies</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('seven')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('seven')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchDocumentariesMovies} id={'seven'} poster={`backdrop`}/>
      </div>
      <div id="Scifi-Movies" className="relative">
        <h1 className='text-white xl:text-2xl md:text-lg text-md ml-4 mt-1'>Scifi Movies</h1>
        <button className="py-4 w-8 hidden xl:top-20 me:flex z-10 left-2 absolute backdrop-blur-2xl ml-2 rounded border-2 border-background" onClick={()=>{leftClick('eight')}}><img src={backArrow}/></button>
        <button className="py-4 w-8 right-1 xl:top-20 hidden me:flex z-10 absolute backdrop-blur-2xl rounded border-2 border-background" onClick={()=>{rightClick('eight')}}><img src={frontArrow}/></button>
        <MovieList fetchMovieList={requests.fetchScifiMovies} id={'eight'} poster={`backdrop`}/>
      </div>
    </div>
  
  );
}

export default App;
