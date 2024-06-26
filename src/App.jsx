import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './App.css'

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=b7cc5055a738d5b85715e9a0428e6023"
  const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=b7cc5055a738d5b85715e9a0428e6023&query="

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])

  console.log(movies)

  const handleSearch = (e) => {
    e.preventDefault()

    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }
  return (
    <div className='App'>
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>
        <div className='search_box'>
          <form onSubmit= {handleSearch}>
            <input onChange={(e) => setTerm(e.target.value) }/>
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className='movies'>
        {movies.map((movie) =>
          <MovieCard {...movie} />
        )}
      </div>
    </div>
  )
}

export default App
