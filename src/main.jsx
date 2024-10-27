import React from 'react';
import ReactDOM from 'react-dom/client';
import CalculaIMC from './funcao';

function App() {
  return (
    <CalculaIMC/>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
