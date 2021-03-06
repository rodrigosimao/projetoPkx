import React, { useState, memo } from 'react';
import Pokeball from '../../assets/images/pokeball.png';

import { SearchContainer, SearchBar, ButtonSearch } from './style';

const Search = (props) => {
  const [search, setSearch] = useState('dito');
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <SearchContainer>
      <SearchBar>
        <input
          className="form"
          placeholder="Digite o nome do Pokemon"
          onChange={onChangeHandler}
        />
      </SearchBar>
      <ButtonSearch>
        <button onClick={onButtonClickHandler}>
          <img src={Pokeball} height="35px"></img>
        </button>
      </ButtonSearch>
    </SearchContainer>
  );
};

export default memo(Search);
