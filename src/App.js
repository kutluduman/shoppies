import { React } from 'react'

import {AppContainer, Main} from './styles/HomeStyle'

import Search from './components/Search'

function App() {
  return (
    <AppContainer>
        <Main>
          <Search/>
        </Main>
    </AppContainer>
  )
}

export default App;
