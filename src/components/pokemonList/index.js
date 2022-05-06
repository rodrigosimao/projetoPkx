import React, { memo } from 'react';
import Pagination from '../pagination';
import Pokemon from './pokemon';

import { TitleContainer, TitleList, PokemonGrid, LoadingCard } from './style';

const PokemonList = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <TitleContainer>
      <TitleList>
        {/* <h1>Pokedex</h1> */}
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </TitleList>

      {loading ? (
        <LoadingCard>
          <p>carregando</p>
          <span></span>
        </LoadingCard>
      ) : (
        <PokemonGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokemonGrid>
      )}
    </TitleContainer>
  );
};

export default memo(PokemonList);
