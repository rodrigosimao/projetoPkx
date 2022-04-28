import React, { memo } from 'react';

import { FooterStyle, ContainerStyle } from './style';

function Footer() {
  return (
    <FooterStyle>
      <ContainerStyle>
        <p>Projeto Pokedex Provu - Direitos reservados</p>
      </ContainerStyle>
    </FooterStyle>
  );
}

export default memo(Footer);
