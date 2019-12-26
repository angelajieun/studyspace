import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Todotemplate from './components/Todotemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Todotemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </Todotemplate>
    </TodoProvider>
  )
}

export default App;
