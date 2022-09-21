import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const movies = useSelector((store) => store.movieReducer)
  
  const unwatched = movies.filter(movie => !movie.watched)
  const watched = movies.filter(movie => movie.watched)


  return (
    <>
      <h3><em>Movies to see</em></h3>
      <div className='containter' >
      {unwatched.map((movie, idx) => {
        return (
            <div className='box' key={idx}>
            <div className='movies'  >
              <p><strong>{movie.title}</strong></p>
              <img src={movie.img} />
              {/* <p>Watched: {movie.watched}</p> */}
            </div>
            </div>
          
        )
      })}
    </div>
    <h3><em>Movies seen</em></h3>
    <div className='containter' >
      {watched.map((movie, idx) => {
        return (
            <div className='box' key={idx}>
            <div className='movies'  >
              <p><strong>{movie.title}</strong></p>
              <img src={movie.img} />
              {/* <p>Watched: {movie.watched}</p> */}
            </div>
            </div>
          
        )
      })}
    </div>
    </>
  )
}

export default Home