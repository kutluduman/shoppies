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
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(() => {
    // if debouncedSearch term exists, user has not typed in the last 500ms
    if (debouncedSearchTerm) {
      const searchUrl = `${omdb.HOSTNAME}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${debouncedSearchTerm}&type=movie&r=json`;

      setSearching(true);
      axios.get(searchUrl)
        .then((res) => {
          if (res.data.Response === 'True') {
            handleResults(res.data.Search);
          } else {
            handleMessage(res.data.Error);
            handleResults([]);
          }
          setSearching(false);
        })
        .catch(() => {
          handleMessage('An unexpected error occured.');
          setSearching(false);
        });
    }
    // Only call effect if debounced search term or current page changes
  }, [debouncedSearchTerm, handleResults, handleMessage]);

  const changeQuery = (value) => {
    handleMessage(null);
    setQuery(value);
  };

  return (
    <section>
      <StyledSearchWrap>
        <StyledIcon icon={searching ? faSpinner : faSearch} spin={searching} />
        <StyledSearch
          type="text"
          name="query"
          placeholder="Search"
          value={query}
          onChange={(e) => changeQuery(e.target.value)}
        />
      </StyledSearchWrap>
    </section>
  );
};

export default Search;
