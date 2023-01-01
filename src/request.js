
const requests = {
    fetchTrending:`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
    fetchScifiMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
}

export default requests; 