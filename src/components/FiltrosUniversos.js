import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'


export default function FiltrosUniversos() {
  return (
    <div className='header-nav-barra'>
      <div className='header-icon'><FontAwesomeIcon icon={faFilter}/></div>
    
    <h4>Filtrar universos</h4>
    </div>
  )
}
