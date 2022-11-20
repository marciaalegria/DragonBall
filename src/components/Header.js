import React from 'react'
import './Header.css'
import {Busqueda} from './Busqueda'
import {FiltrosUniversos} from './FiltrosUniversos'
import Titulo from './Titulo'

function Header() {
  return (
    <>    
      <div className='header'>
      <div className='header-nav'>
        <Busqueda/>
        <FiltrosUniversos/> 
      </div>
      <Titulo/>        
      </div> 
    </>


  )
}
export {Header};
