import Modal from 'react-modal';
import React, { memo, useState } from 'react';
import Logotipo from '../../assets/images/logo.png';

import { HeaderStyle, ContainerStyle, LogoStyle, MenuListStyle } from './style';

const refreshPage = () => {
  window.location.reload();
};

function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <HeaderStyle>
      <ContainerStyle>
        <LogoStyle>
          <img
            onClick={refreshPage}
            src={Logotipo}
            alt="Logotipo Pokemon"
            width="161px"
          />
        </LogoStyle>
        <MenuListStyle>
          <ul>
            <li>
              <span href="sobre" onClick={handleOpenModal}>
                Sobre o projeto
              </span>
              <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                <h2>Hello!!!!</h2>
                <button onClick={handleCloseModal}>close</button>
                <div>I am a modal</div>
              </Modal>
            </li>
            <li>
              <a
                href="https://github.com/rodrigosimao/projetoPkx"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </MenuListStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
}

export default memo(Header);
