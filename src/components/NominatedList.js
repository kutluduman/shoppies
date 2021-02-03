import React from 'react';
import {
  StyledDiv,
  StyledH2,
  StyledEmptySlot,
} from '../styles/NominatedListStyle';
import MovieCard from './MovieCard';
import { nominationSlots } from '../library';

const NominatedList = ({ nominations, handleNomination }) => (
  <section>
    <StyledH2>Nominated Movies</StyledH2>
    <StyledDiv>
      {
          nominations.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              handleNomination={handleNomination}
              isNominated
            />
          ))
        }
      {
          [...Array(nominationSlots - nominations.length)].map((e, i) => (
            <StyledEmptySlot
              key={i}
            >
              {i + nominations.length + 1}
            </StyledEmptySlot>
          ))
        }
    </StyledDiv>
  </section>
);

export default NominatedList;
