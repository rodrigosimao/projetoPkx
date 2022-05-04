import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: absolute;
  top: 20px;
  left: 35%;
  width: 400px;
  height: 50vh;

  .bug {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.bug};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .dark {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.dark};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .dragon {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.dragon};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .electric {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.electric};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .fairy {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.fairy};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .fighting {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.fighting};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .fire {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.fire};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .flying {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.flying};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .ghost {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.ghost};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .grass {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.grass};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .ground {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.ground};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .ice {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.ice};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .normal {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.normal};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .poison {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.poison};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .psychic {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.psychic};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .rock {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.rock};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .steel {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.steel};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }

  .water {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgCard.water};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }
`;

export const ButtonModal = styled.div`
  span {
    background: transparent;
    border: none;
    outline: none;
    width: 15px;
    height: 15px;
    right: -100%;
    top: 0;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: right;

    &::before,
    &:after {
      content: ' ';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #fff;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export const ContainerNameIdModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const IdModal = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fontColor.id};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.id};
  opacity: 0.6;
`;

export const NameModal = styled.div`
  display: flex;
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColor.name};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fontFamily.name};
  text-transform: capitalize;
`;

export const ContainerTypeModal = styled.div``;

export const ImageContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatusModal = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.id};
  color: ${({ theme }) => theme.fontColor.id};
  opacity: 0.6;
  text-transform: uppercase;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ProgressBarModal = styled.div`
  text-transform: capitalize;
`;

export const CardTypeModal = styled.div`
  display: flex;
  gap: 10px;
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
    border-radius: 10px;
    padding: 3px 20px 3px 20px;
    color: ${({ theme }) => theme.fontColor.type};
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.type};
  }

  .poison {
    background-color: ${({ theme }) => theme.bgType.poison};
    border-radius: 10px;
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

export const TypeTextModal = styled.div``;
