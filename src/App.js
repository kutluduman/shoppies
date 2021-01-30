import { React, useState, useContext } from 'react'
import { AppContainer, Main, StyledH1 } from './styles/HomeStyle'
import Search from './components/Search'
import NominatedList from './components/NominatedList'
import ResultsList from './components/ResultsList'

function App() {
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])

  const addResults = useCallback((results) => setResults(results), [])

  const handleNomination = (movie, nominated) => {
    if (nominated) {
      setNominations(
        nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
      )
    } else if (nominations.length < 5) {
      setNominations([...nominations, movie])
    }
  }

  return (
    <AppContainer>
      <Main>
      <StyledH1>The Shoppies</StyledH1>
        <Search addResults={addResults} />
        <ResultsList
          handleNomination={handleNomination}
          results={results}
          nominatedIds={
            new Set(nominations.map((nomination) => nomination.imdbID))
          }
        />
        <NominatedList
          nominations={nominations}
          handleNomination={handleNomination}
        />
      </Main>
    </AppContainer>
  )
}

export default App
