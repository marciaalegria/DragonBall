import React from 'react';
import { useState } from 'react';
import './App.css';
import Busqueda from './components/Busqueda';
import Cards from './components/Cards';
import FiltrosUniversos from './components/FiltrosUniversos';
import Titulo from './components/Titulo';
import Llamada from './Llamada';


function App() {
  return (
    <div className="App">
      <>
      <i class="bi bi-search"></i>
      <i class="bi bi-funnel"></i>
      <Llamada/>
      <Busqueda/>
      <FiltrosUniversos/>
      <Titulo/>
      <Cards/>
      </>
    </div>
  );
}

export default App;
