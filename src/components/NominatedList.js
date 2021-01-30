import React from 'react'
import {
  StyledDiv,
  StyledH2,
  StyledEmptySlot,
} from '../styles/NominatedListStyle'
import MovieCard from './MovieCard'

const NominatedList = ({ nominations, handleNomination, nominationSlots }) => {
  return (
    <section>
      <StyledH2>Nominated Movies</StyledH2>
      <h2>Nominated Movies</h2>
      <StyledDiv>
        {nominations.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            handleNomination={handleNomination}
            nominated
          />
        ))}
        {[...Array(nominationSlots - nominations.length)].map((e, i) => (
          <StyledEmptySlot key={i}>
            {i + nominations.length + 1}
          </StyledEmptySlot>
        ))}
      </StyledDiv>
    </section>
  )
}

export default NominatedList
