import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c71b8;
  font-size: 18px;
  font-family: 'Flexo';
  height: 50px;
  width: 170px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: 'Flexo';
    cursor: pointer;
  }

  a:visited {
    color: #fff;
  }
`;
