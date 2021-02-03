import { React, useState, useCallback, useEffect } from 'react';
import {
  AppContainer,
  Main,
  StyledH1,
  BorderContainer,
  InnerBorderContainer,
} from './styles/HomeStyle';
import Search from './components/Search';
import NominatedList from './components/NominatedList';
import ResultsList from './components/ResultsList';
import Notification from './components/Notification';

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState(null);

  const handleResults = useCallback((res) => setResults(res), []);

  const handleMessage = useCallback((res) => setMessage(res), []);

  const handleNomination = (movie, isNominated) => {
    if (isNominated) {
      setNominations(
        nominations.filter((nomination) => nomination.imdbID !== movie.imdbID)
      );
    } else if (nominations.length < 5) {
      setNominations([...nominations, movie]);
    }
  };

  const closeModal = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    if (nominations.length === 5) {
      setShowNotification(true);
    }
  }, [nominations]);

  return (
    <AppContainer>
      <BorderContainer>
        <InnerBorderContainer>
          <Main>
            {showNotification ? <Notification closeModal={closeModal} /> : null}
            <StyledH1>The Shoppies</StyledH1>
            <Search
              handleResults={handleResults}
              handleMessage={handleMessage}
            />
            <ResultsList
              handleNomination={handleNomination}
              results={results}
              nominatedIds={
                new Set(nominations.map((nomination) => nomination.imdbID))
              }
              message={message}
              fullNominations={nominations.length === 5}
            />
            <NominatedList
              nominations={nominations}
              handleNomination={handleNomination}
            />
          </Main>
        </InnerBorderContainer>
      </BorderContainer>
    </AppContainer>
  );
}

export default App;
