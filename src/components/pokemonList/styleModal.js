import styled from 'styled-components';

export const ContainerModal = styled.div`
  margin: 60px auto;
  width: 800px;

  .grass {
    background: url('images/pokeball.svg') no-repeat;
    background-color: ${({ theme }) => theme.bgType.grass};
    background-position: right 1rem top -1rem;
    background-size: 30rem;
    border-radius: 15px;
    padding: 20px;
  }
`;

export const IdModal = styled.div``;

export const NameModal = styled.div``;
export const ImageContainerModal = styled.div``;

export const ContainerTypeModal = styled.div``;

export const ProgressBarModal = styled.div`
  text-transform: capitalize;
`;

export const CardTypeModal = styled.div`
  display: flex;
  justify-content: center;

  gap: 10px;
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

export const TypeTextModal = styled.div``;
