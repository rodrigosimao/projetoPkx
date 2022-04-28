import React, { memo } from 'react';
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
              <a href="sobre">Sobre o projeto</a>
            </li>
            <li>
              <a href="git">GitHub</a>
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
