import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movieReducer)
 

  return (
    <>
      <h3>Home</h3>
      {movies.map((movie, idx) => {
        return (
          <div className='containter' key={idx}>
            <div className='movies' >
              <p><strong>{movie.title}</strong></p>
              <img src={movie.img} />
            </div>
          </div>
        )
      })}

    </>
  )
}

export default Home