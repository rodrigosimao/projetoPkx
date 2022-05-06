import Modal from 'react-modal';
import React, { useState } from 'react';
import Logotipo from '../../assets/images/logo.png';

import {
  HeaderStyle,
  ContainerStyle,
  LogoStyle,
  MenuListStyle,
  ContainerAbout,
} from './style';

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
                <ContainerAbout>
                  <h2>Projeto Pokedex - Provu 💻</h2>
                  <p>
                    Este projeto faz parte do programa Marketplace - FrontEnd -
                    Provu e tem como objetivo criar uma plataforma para listar
                    todos os Pokemons e exibir suas informações. As informações
                    referentes aos Pokemons foram obtidas através da API REST
                    PokeApi. O layout foi inspirado no projeto do designer
                    <span> </span>
                    <a
                      href="https://www.behance.net/gallery/95727849/Pokdex-App"
                      target="_blank"
                    >
                      Flavio Farias - Teste.
                    </a>
                  </p>
                  <h3>Objetivo 📌</h3>
                  <p>
                    O principal objetivo do projeto foi aprender a trabalhar com
                    React, React Hooks, Styled Components, etc. O desafio foi
                    muito estimulante e desafiador e me fez pesquisar bastante
                    para atingir o objetivo.
                  </p>
                  <h3>Sobre Mim 📋</h3>
                  <p>
                    Trabalho desde os 14 anos com informática e sempre atuei na
                    área de suporte técnico e também lecionando. Agora resolvi
                    me desafiar e aprender a programar e está sendo 3 meses
                    incríveis de muito aprendizado e desafios.
                  </p>
                  <button onClick={handleCloseModal}>Fechar</button>
                </ContainerAbout>
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

export default Header;
