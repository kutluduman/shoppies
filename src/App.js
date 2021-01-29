import { React, useState } from 'react'
import {AppContainer, Main} from './styles/HomeStyle'
import Search from './components/Search'
import NominatedList from './components/NominatedList'
import ResultsList from './components/ResultsList'

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  const addResults = (results) => {
    setResults(results)
  }

  const nominateMovie = (movie) => {
    setNominations([...nominations, movie])
  }

  const unNominateMovie = (id) => {
    setNominations(nominations.filter((movie) => movie.id !== id))
  }

  return (
    <AppContainer>
        <Main>
          <Search addResults={addResults}/>
          <ResultsList nominateMovie={nominateMovie} results={results}/>
          <NominatedList nominations={nominations} unNominateMovie={unNominateMovie}/>
        </Main>
    </AppContainer>
  )
}

export default App;
