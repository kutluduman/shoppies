import React from 'react'
import {StyledCard, StyledTitle, StyledYear} from '../styles/MovieCardStyle'



const MovieCard = ({ movie, nominateMovie }) => {
  return (
      <StyledCard onClick={() => nominateMovie(movie)} url={movie.Poster}>
        <StyledTitle>{movie.Title}</StyledTitle>
        <StyledYear>{movie.Year}</StyledYear>
      </StyledCard>
  );
}
export default MovieCard;