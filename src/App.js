import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { obtenerPersonajes } from './helpers/getCharacters';

function App() {
  const [personaje, setPersonaje]=useState([]);
  useEffect(()=>{
    const getFetch= async ()=>{
      const getPersonaje=  await obtenerPersonajes();
      setPersonaje(getPersonaje)
    }
    getFetch();
  },[])

  return (
    <div className="App">
        <Header/>
        <Cards
          personaje={personaje}
        />
    </div>
  );
}

export default App;
