import React from 'react';
import {StyledCard, StyledText, StyledIcon} from '../styles/MovieCardStyle';
import { faAward } from '@fortawesome/free-solid-svg-icons';



const MovieCard = ({ movie, nominateMovie }) => {
  return (
      <StyledCard url={movie.Poster}>
        <StyledIcon icon={faAward} onClick={() => nominateMovie(movie)}></StyledIcon>
        <StyledText title>{movie.Title}</StyledText>
        <StyledText>{movie.Year}</StyledText>
      </StyledCard>
  );
}
export default MovieCard;