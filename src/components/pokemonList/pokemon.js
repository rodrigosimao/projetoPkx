import Modal from 'react-modal';
import React, { memo, useState } from 'react';
import ProgressBar from '../ProgressBar';

import {
  BackgroundCard,
  CardContainer,
  CardText,
  CardId,
  CardName,
  ContainerType,
  CardType,
  PokemonTypeText,
  CardImageContainer,
  CardNameDetail,
} from './style';

const PokemonDetail = (props) => {
  const { pokemon } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <BackgroundCard>
      <span onClick={handleOpenModal}>
        <div className={pokemon.types[0].type.name}>
          <CardContainer>
            <CardText>
              <CardId>#{pokemon.id}</CardId>
              <CardName>{pokemon.name}</CardName>
              <ContainerType>
                <CardType>
                  {pokemon.types.map((type, index) => {
                    return (
                      <PokemonTypeText>
                        <div className={type.type.name} key={index}>
                          {type.type.name}
                        </div>
                      </PokemonTypeText>
                    );
                  })}
                </CardType>
              </ContainerType>
            </CardText>
            <CardImageContainer>
              <img
                src={pokemon.sprites.other.home.front_shiny}
                alt={pokemon.name}
                height="100px"
              />
            </CardImageContainer>
          </CardContainer>
        </div>
      </span>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <button onClick={handleCloseModal}>Fechar Card</button>
        <CardId>#{pokemon.id}</CardId>
        <CardNameDetail>{pokemon.name}</CardNameDetail>
        <CardImageContainer>
          <img
            src={pokemon.sprites.other.home.front_shiny}
            alt={pokemon.name}
            height="100px"
          />
        </CardImageContainer>
        <ContainerType>
          <CardType>
            {pokemon.types.map((type, index) => {
              return (
                <PokemonTypeText>
                  <div className={type.type.name} key={index}>
                    {type.type.name}
                  </div>
                </PokemonTypeText>
              );
            })}
          </CardType>
        </ContainerType>
        <h1>STATUS</h1>
        {pokemon.stats &&
          pokemon.stats.map((stat, index) => {
            return (
              <ProgressBar
                key={index}
                title={stat.stat.name}
                width={stat.base_stat}
                text={stat.base_stat}
              />
            );
          })}
        <h1>Base Stats</h1>
      </Modal>
    </BackgroundCard>
  );
};

export default memo(PokemonDetail);
