import React from 'react'
import { StyledCard, StyledText, StyledIcon } from '../styles/MovieCardStyle'
import { faAward } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ movie, handleNomination, nominated, disabled }) => {
  return (
    <StyledCard url={movie.Poster} nominated={nominated} disabled={disabled}>
      <StyledIcon
        icon={faAward}
        onClick={() => handleNomination(movie, nominated)}
        nominated={nominated}
      />
      <StyledText title={true}>{movie.Title}</StyledText>
      <StyledText>{movie.Year}</StyledText>
    </StyledCard>
  )
}
export default MovieCard
