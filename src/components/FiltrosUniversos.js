import React, { useContext, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import { DataContext } from '../context/DataContext'
import Select from 'react-select'

const options = []

const rellenarUniverso= (dataUniverso)=>{
  let buscarDato= options.find(option=>option.value=== dataUniverso.universe);
  if (buscarDato=== undefined) {
    options.push({ value: dataUniverso.universe, label: 'Universo '+dataUniverso.universe});
  }
}
function getUniverse(universo){
console.log(universo);
}
function FiltrosUniversos() {
  const [universo, setUniverso]= useState([]);
  const {personajes}=useContext(DataContext);
  personajes.map(rellenarUniverso);
  
  return (
    <div className='header-nav-barra'>
     <div className='header-icon'><FontAwesomeIcon icon={faFilter}/></div>
      <Select placeholder='Universo' options={options} onChange={setUniverso }/>
    <button>Filtrar universos</button>
    </div>
  )
}
export {FiltrosUniversos};
