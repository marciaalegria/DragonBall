import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function Busqueda() {
  return (
    <div className='header-nav-barra'>
    <div className='header-icon'><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
    <h4>Buscar por nombre</h4>
    </div>
  )
}
