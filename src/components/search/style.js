import styled from 'styled-components';

export const SearchContainer = styled.section`
  max-width: 1250px;
  margin: 60px auto;
  padding: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    width: 350px;
    height: 50px;
    border: 2px solid #2c71b8;
    outline-color: #2c71b8;
    border-radius: 4px;
    padding: 10px;

    ::-webkit-input-placeholder {
      font-family: 'FlexoW01-Italic';
      color: #bcb9b9;
    }
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: none;

  button {
    border: none;
  }
`;

export const CardContainer = styled.div``;

export const CardName = styled.div``;
export const CardWeight = styled.div``;
export const CardImage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
