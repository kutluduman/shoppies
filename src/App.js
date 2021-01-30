import { React, useState, useContext, useEffect } from 'react'
import { AppContainer, Main, StyledH1 } from './styles/HomeStyle'
import Search from './components/Search'
import NominatedList from './components/NominatedList'
import ResultsList from './components/ResultsList'
import Notification from './components/Notification'

function App() {
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [nominationSlots, setNominationSlots] = useState(5)

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

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }, [nominations])

  return (
    <AppContainer>
      <Main>
        {showNotification ? <Notification /> : null}
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
          nominationSlots={nominationSlots}
        />
      </Main>
    </AppContainer>
  )
}

export default App
