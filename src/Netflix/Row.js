import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchMovie() {
      const responce = await axios.get(fetchUrl)
      setMovies(responce.data.results)
      return responce
    }
    fetchMovie()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch(error => console.log(error))
    }
  }
  return (
    <>
      <div className='row__'>
        <h2 className='text-uppercase row__title'>{title}</h2>
        <div className='row__posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  )
}

export default Row
