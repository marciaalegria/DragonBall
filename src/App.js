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
      <div className='Header'>
      </div>
      <Busqueda><i class="bi bi-search"></i></Busqueda>
      <FiltrosUniversos><i class="bi bi-funnel"></i></FiltrosUniversos>
      <Titulo/>
      <div className='body'>
      <Llamada/>
      <Cards
        title='nombre'
        universe='universo'
        image='imagen'/>
      </div>
    </div>
  );
}

export default App;
