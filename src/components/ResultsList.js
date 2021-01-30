import React from 'react'
import MovieCard from './MovieCard'
import { StyledSection } from '../styles/ResultsListStyle'

const ResultsList = ({ results, handleNomination, nominatedIds }) => {
  return (
    <StyledSection>
      {results.length > 0
        ? results.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              handleNomination={handleNomination}
              nominated={nominatedIds.has(movie.imdbID)}
              disabled={nominatedIds.has(movie.imdbID)}
            />
          ))
        : null}
    </StyledSection>
  )
}
export default ResultsList
