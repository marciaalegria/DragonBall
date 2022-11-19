import React from 'react'
import './Header.css'
import Busqueda from './Busqueda'
import {FiltrosUniversos} from './FiltrosUniversos'
import Titulo from './Titulo'
import { obtenerPersonajes } from '../helpers/getCharacters'

function Header() {
  return (
    <>    
      <div className='header'>
      <div className='header-nav'>
        <Busqueda/>
        <FiltrosUniversos
          universos={obtenerPersonajes().universos}/> 
      </div>
      <Titulo/>        
      </div> 
    </>


  )
}
export {Header};
