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
} from './style';

import {
  ContainerModal,
  IdModal,
  NameModal,
  ImageContainerModal,
  ContainerTypeModal,
  CardTypeModal,
  ProgressBarModal,
  TypeTextModal,
} from './styleModal';

Modal.setAppElement('#root');

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={pokemon.types[0].type.name}
      >
        <ContainerModal>
          <div className={pokemon.types[0].type.name}>
            <button onClick={handleCloseModal}>Fechar Card</button>
            <IdModal>#{pokemon.id}</IdModal>
            <NameModal>{pokemon.name}</NameModal>
            <ImageContainerModal>
              <img
                src={pokemon.sprites.other.home.front_shiny}
                alt={pokemon.name}
                height="100px"
              />
            </ImageContainerModal>
            <ContainerTypeModal>
              <CardTypeModal>
                {pokemon.types.map((type, index) => {
                  return (
                    <TypeTextModal>
                      <div className={type.type.name} key={index}>
                        {type.type.name}
                      </div>
                    </TypeTextModal>
                  );
                })}
              </CardTypeModal>
            </ContainerTypeModal>
            <h1>STATUS</h1>
            {pokemon.stats &&
              pokemon.stats.map((stat, index) => {
                return (
                  <ProgressBarModal>
                    <ProgressBar
                      key={index}
                      title={stat.stat.name}
                      width={stat.base_stat}
                      text={stat.base_stat}
                    />
                  </ProgressBarModal>
                );
              })}
          </div>
        </ContainerModal>
      </Modal>
    </BackgroundCard>
  );
};

export default memo(PokemonDetail);
