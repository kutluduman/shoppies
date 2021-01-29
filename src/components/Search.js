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
import ResultsList from './ResultsList';

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState(false)
  const [input, setInput] = useState('')
  const debouncedSearchTerm = useDebounce(input,500);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if(debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}&r=json`;
      
      axios.get(searchUrl)
      .then((res) => {
        if(res.data.Response === 'True') {
          setResults(res.data.Search);
        } else {
          setMessage(res.data.Error);
          setResults([]);
        }
      })
      .catch(() => {
        setMessage('An unexpected error occured.');
        setSearch(false);
      })
    }
  },[debouncedSearchTerm]);


  const handleChangeInput = (value) => {
    setMessage(null);
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
        {message && <p>{message}</p>}
        <ResultsList results={results} />
    </section>   
  )
}

export default Search
