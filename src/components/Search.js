import React, {useState, useEffect } from 'react'
import axios from 'axios'
import {omdb} from '../library';
import useDebounce from '../hooks/useDebounce';
import {
  StyledSearchWrap,
  StyledIcon,
  StyledSearch,
} from '../styles/SearchStyle'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState(false)
  const [input, setInput] = useState('')
  const debouncedSearchTerm = useDebounce(input,500);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}`;
      
      axios.get(searchUrl)
      .then((res) => {
        if(res.data.Response === 'True') {
          setResults(res.data.Search);
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err)
        setSearch(false);
      })
    }
  },[debouncedSearchTerm]);


  const handleChangeInput = (value) => {
    setInput(value)
  }

  return (
    <section>
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
    </section>   
  )
}

export default Search
