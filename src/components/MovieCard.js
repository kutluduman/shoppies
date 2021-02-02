import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import {
  CardWrapper,
  StyledYear,
  StyledTitle,
  StyledButton,
  StyledImage,
  StyledText,
} from '../styles/MovieCardStyle';

const MovieCard = ({ movie, handleNomination, nominated, disabled }) => {
  return (
    <CardWrapper disabled={disabled}>
      <StyledImage src={movie.Poster} />
      <StyledButton
        type="button"
        onClick={() => handleNomination(movie, nominated)}
        nominated={nominated}
      >
        <FontAwesomeIcon icon={faAward} />
      </StyledButton>
      <StyledText>
        <StyledTitle>{movie.Title}</StyledTitle>
        <StyledYear>{movie.Year}</StyledYear>
      </StyledText>
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledYear>{movie.Year}</StyledYear>
    </CardWrapper>
  );
};
export default MovieCard;
