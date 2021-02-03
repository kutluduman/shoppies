import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { omdb } from '../library';
import useDebounce from '../hooks/useDebounce';
import {
  StyledSearchWrap,
  StyledIcon,
  StyledSearch,
} from '../styles/SearchStyle';


const Search = ({ handleResults, handleMessage }) => {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState('');
  const debouncedSearchTerm = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}&type=movie&r=json`;

      setSearch(true);
      axios
        .get(searchUrl)
        .then((res) => {
          if (res.data.Response === 'True') {
            handleResults(res.data.Search);
          } else {
            handleMessage(res.data.Error);
            handleResults([]);
          }
        })
        .catch(() => {
          handleMessage('An unexpected error occured.');
          setSearch(false);
        });
    }
  }, [debouncedSearchTerm, handleResults, handleMessage]);

  const handleChangeInput = (value) => {
    handleMessage(null);
    setInput(value);
  };

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
  );
};

export default Search;
