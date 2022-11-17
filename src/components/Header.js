import React from 'react'
import './Header.css'
import Busqueda from './Busqueda'
import FiltrosUniversos from './FiltrosUniversos'
import Titulo from './Titulo'

export default function Header() {
  return (
    <div className='Header'>
        <Busqueda/>
        <FiltrosUniversos/>
        <Titulo/>
    </div>
  )
}
