import React from 'react';
import {StyledDiv} from '../styles/NominatedListStyle';
import MovieCard from './MovieCard';



const NominatedList = ({nominations}) => {
  return (
    <section>
      <h2>Nominated Movies</h2>
        <StyledDiv>
          {
            nominations.map((movie) => <MovieCard key={movie.imdbID} movie={movie}>Test</MovieCard>)
          }
        </StyledDiv>
    </section>
  );
}

export default NominatedList;