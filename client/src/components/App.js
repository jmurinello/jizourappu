import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from './App.style';
import { GlobalStyle } from './Global.style';
import NewText from './NewText';

render(
  <AppContainer>
    <GlobalStyle />
    <NewText />
  </AppContainer>,
  document.getElementById('root')
);
