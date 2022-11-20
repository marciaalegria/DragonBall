import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { DataContext } from '../context/DataContext'
import Select from 'react-select'

const optionsSearch = []
const rellenarBusqueda=( DataBusqueda)=>{
  let buscarNombre= optionsSearch.find(opt=> opt.value=== DataBusqueda.name);
  if (buscarNombre=== undefined) {
    optionsSearch.push({ value: DataBusqueda.name, label: DataBusqueda.name});
  }
}

function Busqueda() {
  const {personajes}= useContext(DataContext);
  personajes.map(rellenarBusqueda);
  return (
    <div className='header-nav-barra'>
    <div className='header-icon'><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
    <Select placeholder='Nombre' options={optionsSearch}/>
    <button>Buscar por nombre</button>
    </div>
  )
}
export {Busqueda};