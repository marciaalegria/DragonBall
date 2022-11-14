import React from 'react';
import './App.css';
import Busqueda from './components/Busqueda';
import Cards from './components/Cards';
import FiltrosUniversos from './components/FiltrosUniversos';

function App() {
  return (
    <div className="App">
      <>
      <Busqueda/>
      <FiltrosUniversos/>
      <h2>DragonBall prueba del dragon</h2>
      <Cards/>
      </>
    </div>
  );
}

export default App;
