import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Todotemplate from './components/Todotemplate';
import TodoHead from './components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`
const test = "1234";
const test2 = '1234';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Todotemplate>
        <TodoHead />
      </Todotemplate>
    </React.Fragment>
  );
}

export default App;
