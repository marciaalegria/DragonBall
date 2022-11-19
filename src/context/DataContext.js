import React, { createContext, useState, useEffect } from "react"
import { obtenerPersonajes } from "../helpers/getCharacters";

export const DataContext = createContext();

export const DataProvider= ({children}) =>{
  const [personaje, setPersonaje]=useState([]);
  useEffect(()=>{
    const getFetch= async ()=>{
      const getPersonaje=  await obtenerPersonajes();
      setPersonaje(getPersonaje)
    }
    getFetch();
  },[])
  return (
    <DataContext.Provider value={{personaje, setPersonaje}}>
        {children}
    </DataContext.Provider>
  )
}

