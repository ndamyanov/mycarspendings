import React from 'react';
import {SearchField, StyledSearchIcon, SearchInput} from './styles';

const Search = (props) =>  {
  const {searchPattern, setSearchPattern} = props;

  return(
    <SearchField>
      <StyledSearchIcon />
        <SearchInput type='text' value={searchPattern} onChange={(event) => setSearchPattern(event.target.value)} />
    </SearchField>
  )
}

export default Search;