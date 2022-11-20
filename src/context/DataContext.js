import React, { createContext, useState, useEffect } from "react"
import { obtenerPersonajes } from "../helpers/getCharacters";

export const DataContext = createContext();

export const DataProvider= ({children}) =>{
  const [personajes, setPersonajes]=useState([]);
  useEffect(()=>{
    const getFetch= async ()=>{
      const getPersonajes=  await obtenerPersonajes();
      setPersonajes(getPersonajes)
    }
    getFetch();
  },[])
  return (
    <DataContext.Provider value={{personajes, setPersonajes}}>
        {children}
    </DataContext.Provider>
  )
}
