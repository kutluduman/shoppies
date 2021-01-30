import React from 'react'
import {
  StyledCard,
  StyledYear,
  StyledTitle,
  StyledButton,
} from '../styles/MovieCardStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ movie, handleNomination, nominated, disabled }) => {
  return (
    <StyledCard url={movie.Poster} nominated={nominated} disabled={disabled}>
      <StyledButton
        type="button"
        onClick={() => handleNomination(movie, nominated)}
        nominated={nominated}
      >
        <FontAwesomeIcon icon={faAward} />
      </StyledButton>
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledYear>{movie.Year}</StyledYear>
    </StyledCard>
  )
}
export default MovieCard
