import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function FiltrosUniversos() {
  
  return (
    <div className='header-nav-barra'>
      <div className='header-icon'><FontAwesomeIcon icon={faFilter}/></div>
      <Select options={options} />
    <h4>Filtrar universos</h4>
    </div>
  )
}
export {FiltrosUniversos};
