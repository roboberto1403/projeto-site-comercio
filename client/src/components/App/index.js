import React from 'react';
import Header from '../Header';
import Home from '../../routes/Home';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

function App() {
  const [aberto, setAberto] = useState(false);

  return (
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <Header aberto={aberto} setAberto={setAberto} />
        <Routes>
          <Route path='/' element={<Home aberto={aberto} />} />
          {console.log(aberto)}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;