import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/style/global-style';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
  theme: {
    primary: '#ffd32c',
    secondary: '#2C71B8',
  },

  bgCard: {
    bug: '#8bd674',
    dark: '#6f6e78',
    dragon: '#7383b9',
    electric: '#f2cb55',
    fairy: '#eba8c3',
    fighting: '#eb4971',
    fire: '#ffa756',
    flying: '',
    ghost: '#8571be',
    grass: '#8bbe8a',
    ground: '#f78551',
    ice: '#91d8df',
    normal: '#b5b9c4',
    poison: '#9f6e97',
    psychic: '#ff6568',
    rock: '#d4c294',
    steel: '#4c91b2',
    water: '#58abf6',
  },

  bgType: {
    bug: '#8cb230',
    dark: '#58575f',
    dragon: '#0f6ac0',
    electric: '#eed535',
    fairy: '#ed6ec7',
    fighting: '#d04164',
    fire: '#fd7d24',
    flying: '#748fc9',
    ghost: '#556aae',
    grass: '#62b957',
    ground: '#dd7748',
    ice: '#61cec0',
    normal: '#9da0aa',
    poison: '#a552cc',
    psychic: '#ea5d60',
    rock: '#baab82',
    steel: '#417d9a',
    water: '#4a90da',
  },

  fontColor: {
    id: '#000000',
    name: '#ffffff',
    type: '#ffffff',
  },

  fontFamily: {
    id: 'Roboto',
    name: 'Flexo',
    type: 'Flexo',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
