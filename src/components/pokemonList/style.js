import styled from 'styled-components';

export const TitleContainer = styled.div``;

export const TitleList = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  padding: 10px;
`;

export const LoadingCard = styled.div`
  text-align: center;
`;

export const PokemonGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  max-width: 95%;
  margin: 0 auto;
`;

export const BackgroundCard = styled.div`
  cursor: pointer;

  .bug {
    background-color: ${({ theme }) => theme.bgCard.bug};
  }

  .dark {
    background-color: ${({ theme }) => theme.bgCard.dark};
  }

  .dragon {
    background-color: ${({ theme }) => theme.bgCard.dragon};
  }

  .electric {
    background-color: ${({ theme }) => theme.bgCard.electric};
  }

  .fairy {
    background-color: ${({ theme }) => theme.bgCard.fairy};
  }

  .fighting {
    background-color: ${({ theme }) => theme.bgCard.fighting};
  }

  .fire {
    background-color: ${({ theme }) => theme.bgCard.fire};
  }

  .flying {
    background-color: ${({ theme }) => theme.bgCard.flying};
  }

  .ghost {
    background-color: ${({ theme }) => theme.bgCard.ghost};
  }

  .grass {
    background-color: ${({ theme }) => theme.bgCard.grass};
  }

  .ground {
    background-color: ${({ theme }) => theme.bgCard.ground};
  }

  .ice {
    background-color: ${({ theme }) => theme.bgCard.ice};
  }

  .normal {
    background-color: ${({ theme }) => theme.bgCard.normal};
  }

  .poison {
    background-color: ${({ theme }) => theme.bgCard.poison};
  }

  .psychic {
    background-color: ${({ theme }) => theme.bgCard.psychic};
  }

  .rock {
    background-color: ${({ theme }) => theme.bgCard.rock};
  }

  .steel {
    background-color: ${({ theme }) => theme.bgCard.steel};
  }

  .water {
    background-color: ${({ theme }) => theme.bgCard.water};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background: url('/images/pokeball.svg') no-repeat;
  background-position: right 1rem top -1rem;
  background-size: 14rem;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  flex: 1;
`;

export const CardId = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.fontColor.id};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.id};
  opacity: 0.6;
`;
export const CardName = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fontColor.name};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.name};
  text-transform: capitalize;
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardType = styled.div`
  display: flex;
`;
export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonTypeText = styled.div`
  margin-right: 10px;
  margin-top: 5px;
  text-transform: capitalize;

  .bug {
    background-color: ${({ theme }) => theme.bgType.bug};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .dragon {
    background-color: ${({ theme }) => theme.bgType.dragon};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .fairy {
    background-color: ${({ theme }) => theme.bgType.fairy};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .fire {
    background-color: ${({ theme }) => theme.bgType.fire};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .ghost {
    background-color: ${({ theme }) => theme.bgType.ghost};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .ground {
    background-color: ${({ theme }) => theme.bgType.ground};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .normal {
    background-color: ${({ theme }) => theme.bgType.normal};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .psychic {
    background-color: ${({ theme }) => theme.bgType.psychic};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .steel {
    background-color: ${({ theme }) => theme.bgType.steel};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .dark {
    background-color: ${({ theme }) => theme.bgType.dark};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .electric {
    background-color: ${({ theme }) => theme.bgType.electric};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .fighting {
    background-color: ${({ theme }) => theme.bgType.fighting};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .flying {
    background-color: ${({ theme }) => theme.bgType.flying};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .grass {
    background-color: ${({ theme }) => theme.bgType.grass};
    border-radius: 5px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .poison {
    background-color: ${({ theme }) => theme.bgType.poison};
    border-radius: 5px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .ice {
    background-color: ${({ theme }) => theme.bgType.ice};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .rock {
    background-color: ${({ theme }) => theme.bgType.rock};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .water {
    background-color: ${({ theme }) => theme.bgType.water};
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }
`;
