// imports
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//files from project
import { searchForMovie } from '../apis/imdb'
import { addAMovie } from '../actions/actions'


function AddMovie() {
  const dispatch = useDispatch()
  const [movieSearch,setMovieSearch] = useState('')
  const [results,setResults] = useState([])
  
  const handleSearch = async (evt) => {
    evt.preventDefault()
    // dispatch()
    // console.log('submit', movieSearch)
    const movieSuggestions = await searchForMovie(movieSearch)
    setResults(movieSuggestions)
    setMovieSearch('')
  }

  const handleTyping = (evt) => {
    setMovieSearch(evt.target.value)
  }

  const handleAdd = (movie) => {
    // console.log('Adding', movie)
    dispatch(addAMovie(movie))
  }
  
  return (
    <>
    
        <h3>Add Movie</h3>

        <form className='add-form' onSubmit={handleSearch}>
          <label htmlFor='search'>New Movie:</label>
            <input type='text' id='search' onChange={handleTyping} value={movieSearch}/>
            <button>Search</button>
        </form>
        <div className='containter' >
        {results.map((movie, idx) => {
        return (
          <div className='box' key={idx}>
          <div className='movies' >
            <p >{movie.title}</p>
           <img src={movie.image} />
           <button onClick={() => handleAdd(movie)}>Save</button>
          </div>
          </div>
        ) 
        })
      }
      </div>
   
    </>
  )
}

export default AddMovie