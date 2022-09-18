import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './Home'
import MovieDetails from './MovieDetails'
import AddMovie from './AddMovie'


function App() {
  return (
    <>
      <header className="header">
        <h1>Movie Code Along</h1>
        <Link to='/add'>Add Movie</Link>
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
