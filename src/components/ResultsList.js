import React from 'react'
import MovieCard from './MovieCard'
import {
  StyledSection,
  StyledEmptyState,
  StyledMessage,
} from '../styles/ResultsListStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const ResultsList = ({ results, handleNomination, nominatedIds, message }) => {
  return (
    <StyledSection>
      {message && <StyledMessage>{message}</StyledMessage>}
      {results.length > 0 ? (
        results.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            handleNomination={handleNomination}
            nominated={nominatedIds.has(movie.imdbID)}
            disabled={nominatedIds.has(movie.imdbID)}
          />
        ))
      ) : (
        <StyledEmptyState>
          <FontAwesomeIcon icon={faFilm} />
          <p>Search for your favorite movies above</p>
        </StyledEmptyState>
      )}
    </StyledSection>
  )
}
export default ResultsList
