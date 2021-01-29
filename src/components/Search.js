import { React, useState } from 'react'

import {
  StyledSearchWrap,
  StyledIcon,
  StyledSearch,
} from '../styles/SearchStyle'

import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  const [search, setSearch] = useState(false)
  const [input, setInput] = useState('')

  const handleChangeInput = (value) => {
    setInput(value)
  }

  return (
    <StyledSearchWrap>
      <StyledIcon icon={search ? faSpinner : faSearch} spin={search} />
      <StyledSearch
        type="text"
        name="input"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
    </StyledSearchWrap>
  )
}

export default Search
