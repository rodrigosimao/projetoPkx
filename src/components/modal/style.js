import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

/*Estilo pagina Modal */

export const MasterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: #fff;
  color: #000;
  width: 60%;
  height: 60%;
  border-radius: 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  right: calc(-100% + 64px);
  top: 16px;
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div``;

export const Modal = styled.div``;
