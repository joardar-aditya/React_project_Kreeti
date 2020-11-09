import React from 'react';
import logo from './logo.svg';
import './App.css';
import Guest from './Guest';
import ReactDOMServer, { renderToString } from 'react-dom/server';

function App() {
  return (
    <div className="App">
      <Guest />
    </div>
  );
}

export default App;

renderToString(<App />);