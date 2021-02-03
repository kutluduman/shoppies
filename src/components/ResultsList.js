import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {
  StyledSection,
  StyledEmptyState,
  StyledMessage,
  StyledButton,
} from '../styles/ResultsListStyle';
import MovieCard from './MovieCard';

const ResultsList = ({
  results, handleNomination, nominatedIds, message, fullNominations,
}) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <StyledSection showAll={showAll}>
      {message && <StyledMessage>{message}</StyledMessage>}
      {
        results.length > 0
          ? (
            <>
              {
              results.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  handleNomination={handleNomination}
                  disabled={nominatedIds.has(movie.imdbID)}
                  fullNominations={fullNominations}
                />
              ))
            }
              {
            !showAll ? <StyledButton showAll={showAll} onClick={() => setShowAll(true)} type="button">Show All</StyledButton> : null
            }
            </>
          )
          : (
            <StyledEmptyState>
              <FontAwesomeIcon icon={faFilm} />
              <p>Search for your favorite movies above</p>
            </StyledEmptyState>
          )
      }
    </StyledSection>
  );
};
export default ResultsList;
