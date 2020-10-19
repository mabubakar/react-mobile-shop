import React from 'react'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import './Netflix.css'

const Netflix = () => {
  return (
    <section className='netflix'>
      <Banner />
      <Row
        title='Netflix Orignal'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
      <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
      <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
      <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
    </section>
  )
}

export default Netflix
