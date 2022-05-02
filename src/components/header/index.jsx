import Modal from 'react-modal';
import React, { memo, useState } from 'react';
import Logotipo from '../../assets/images/logo.png';
import IconTheme from '../../assets/images/icon_moon.png';

import {
  HeaderStyle,
  ContainerStyle,
  LogoStyle,
  MenuListStyle,
  LogoIconStyle,
} from './style';

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
          <a href="#">
            <img src={Logotipo} alt="Logotipo Pokemon" width="161px" />
          </a>
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
        <LogoIconStyle>
          <a href="#">
            <img src={IconTheme} alt="Icone tema escuro" width="20px" />
          </a>
        </LogoIconStyle>
      </ContainerStyle>
    </HeaderStyle>
  );
}

export default memo(Header);
