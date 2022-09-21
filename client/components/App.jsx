import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Home from './Home'
import MovieDetails from './MovieDetails'
import AddMovie from './AddMovie'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/actions'
// import { getMoviesApi } from '../apis/frontApi'



function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  // console.log('location', location)

  const isHome = location.pathname === '/'
  

  //TODO only trigger on load useEffect
  dispatch(fetchMovies())
  // getMoviesApi()
  return (
    <>
      <header className="header">
        <h1>Watch Along</h1>
        <h4><em>Movie catalog of movies to watch or rewatch</em></h4>
        <div className='nav'>
          {isHome ? <Link to='/add'>Add Movie</Link> : <Link to='/'>Home</Link>}
          {/* {location.pathname !== '/' && <Link to='/'>Home</Link>} */}
          {/* {location.pathname !== '/add' && <Link to='/add'>Home</Link>} */}
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
