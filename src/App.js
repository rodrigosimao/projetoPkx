import React, { useEffect, useState } from 'react';
import { searchPokemon, getPokemons, getPokemonsData } from './api';
import Header from './components/header';
import PokemonList from './components/pokemonList';
import Search from './components/search';
import Footer from './components/footer';
import styled from 'styled-components';
import Psyduck from './assets/images/psyduck.svg';

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 15;
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log('fetchPokemons error: ', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <Search onSearch={onSearchHandler} />
      {notFound ? (
        <NotFoundSearch>
          <h2>Pokemon não encontrado</h2>
          <img src={Psyduck} alt="Psyduck" width="300px" />
        </NotFoundSearch>
      ) : (
        <PokemonList
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
      <Footer />
    </div>
  );
}

const NotFoundSearch = styled.div`
  color: ${({ theme }) => theme.theme.secondary};
  font-family: ${({ theme }) => theme.fontFamily.name};
  font-size: 1.5rem;
  text-align: center;
`;

export default App;
