import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovie() {
      const responce = await axios.get(fetchUrl)
      setMovies(responce.data.results)
      return responce
    }
    fetchMovie()
  }, [fetchUrl])

  return (
    <>
      <div className='row__'>
        <h2 className='text-uppercase row__title'>{title}</h2>
        <div className='row__posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Row
