import React from 'react';

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
} from './style';

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <BackgroundCard>
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
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              height="80px"
            />
          </CardImageContainer>
        </CardContainer>
      </div>
    </BackgroundCard>
  );
};

export default Pokemon;
