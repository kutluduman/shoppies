import React from 'react'
import { StyledDiv, StyledH2 } from '../styles/NominatedListStyle'
import MovieCard from './MovieCard'

const NominatedList = ({ nominations, handleNomination }) => {
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
      </StyledDiv>
    </section>
  )
}

export default NominatedList
