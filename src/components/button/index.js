import React, { memo } from 'react';
import { useState, useEffect } from 'react';

function BotaoCarregar() {
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=14',
  );

  const carregarPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    console.log(data);
  };

  useEffect(() => {
    carregarPokemons();
  }, []);

  //Botao load more

  return (
    <div className="botao-carregar">
      <button className="load-more" onClick={() => carregarPokemons()}>
        Load more
      </button>
    </div>
  );
}

export default BotaoCarregar;
