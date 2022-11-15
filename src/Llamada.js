import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Llamada() {
  const [personaje, setPersonaje]=useState([]);
  useEffect(()=>{
    obtenerPersonajes();
  },[])
  const obtenerPersonajes= async ()=>{
    const data = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters');
    const resp = await data.json();
    console.log(resp);
    setPersonaje(resp);
  }
  return (
    <div>
      
    </div>
  )
}
