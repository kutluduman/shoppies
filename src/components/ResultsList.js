import React from 'react';
import MovieCard from './MovieCard';
import {StyledSection} from '../styles/ResultsListStyle';


const ResultsList = ({ results, nominateMovie }) => {
  return (
    <StyledSection>
      {
        results.length > 0
        ? results.map((movie) => <MovieCard key={movie.imdbID} movie={movie} nominateMovie={nominateMovie} />)
        : null
      }
    </StyledSection>
  );
}
export default ResultsList;