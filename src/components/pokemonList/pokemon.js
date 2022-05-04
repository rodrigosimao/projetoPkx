import Modal from 'react-modal';
import React, { memo, useState } from 'react';
import ProgressBar from '../progress';

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
  ButtonModal,
  IdModal,
  NameModal,
  ImageContainerModal,
  ContainerTypeModal,
  CardTypeModal,
  ProgressBarModal,
  TypeTextModal,
  ContainerNameIdModal,
  StatusModal,
} from './styleModal';

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
            <ButtonModal>
              <span onClick={handleCloseModal}></span>
            </ButtonModal>
            <ContainerNameIdModal>
              <NameModal>{pokemon.name}</NameModal>
              <IdModal>#{pokemon.id}</IdModal>
            </ContainerNameIdModal>
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
              <ImageContainerModal>
                <img
                  src={pokemon.sprites.other.home.front_shiny}
                  alt={pokemon.name}
                  height="230px"
                />
              </ImageContainerModal>
            </ContainerTypeModal>
            <StatusModal>
              <h2>status</h2>
            </StatusModal>

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
