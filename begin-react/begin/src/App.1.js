import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <React.Fragment>
      <Hello name='젤라님' color='pink' />
      <Hello color='skyblue' />
    </React.Fragment>
  );
}

export default App;
