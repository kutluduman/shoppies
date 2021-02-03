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

const MovieCard = ({
  movie, handleNomination, isNominated, disabled, fullNominations,
}) => (
  <CardWrapper disabled={disabled}>
    {movie.Poster !== 'N/A' ? <StyledImage src={movie.Poster} /> : null}
    <StyledButton type="button" fullNominations={fullNominations} disabled={disabled} isNominated={isNominated} onClick={() => handleNomination(movie, isNominated)}>
      <FontAwesomeIcon icon={faAward} />
    </StyledButton>
    <StyledText>
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledYear>{movie.Year}</StyledYear>
    </StyledText>
  </CardWrapper>
);

export default MovieCard;
