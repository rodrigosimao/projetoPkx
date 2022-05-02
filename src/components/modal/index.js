import React from 'react';
import Close from '../../assets/images/close_icon.svg';

import { MasterContainer, ContainerModal, Button, Container } from './style';

const Modal = ({ children }) => {
  return (
    <MasterContainer onClick={onClose}>
      <ContainerModal>
        <Button onClick={onClose}>
          <button>
            <img src={Close} alt="Close" width="20px" />
          </button>
        </Button>
        <Container>{children}</Container>
      </ContainerModal>
    </MasterContainer>
  );
};

export default Modal;
