import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import MovieDetails from './MovieDetails'
import AddMovie from './AddMovie'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/actions'
// import { getMoviesApi } from '../apis/frontApi'



function App() {
  const dispatch = useDispatch()
  dispatch(fetchMovies())
  // getMoviesApi()
  return (
    <>
      <header className="header">
        <h1>Movie Code Along</h1>
        <div className='nav'>
        <Link to='/add'>Add Movie</Link>
        </div>
        
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddMovie/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>         
        </Routes>
      </section>
    </>
  )
}

export default App
