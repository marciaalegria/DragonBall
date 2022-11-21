import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './InfoPersonaje.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLessThan} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

//obtener nombre del personaje de la ruta html
//al obtenerla filtrar los datos del dato de context
function InfoPersonaje() {
  
  const {personajes}= useContext(DataContext);
  const location = useLocation()
  console.log(location.search);
  const name= location.search.replace('?','');
  const getDatosPersonaje = (name)=>{
    return personajes.find( pers => pers.name === name);
  }
  const personaje = getDatosPersonaje(name);
  console.log(personaje);
  return (
    <div className='info'>
      <div className='info-section'>
        <div className='info-btn'>
        <FontAwesomeIcon href='/' icon={faLessThan}/>
          <Link to='/home'><h3 className='volver-inicio'> Ir al inicio</h3></Link> 
        </div>
        <div className='info-image'>
        <img className='img-info' src='image.png' alt=''></img>
        </div>
      </div>
      <div className='info-personaje'>
        <div className='info-personaje-image'>
          <img className='' src={personaje.imageUrl} alt='foto'></img>
        </div>
        <div className='info-personaje-datos'>
          <h1 className='info-h1'>{personaje.name}</h1>
          <div className='datos-universe'>
            <h3>Universo {personaje.universe}</h3>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>Specie</h4>
            <h4 className='details-description'>{personaje.specie}</h4>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>Rol</h4><h2 className='details-description'>{personaje.role}</h2>
          </div>
          <div className='datos-universe-details'>
          <h4 className='details-title'>Status</h4><h2 className='details-description'>{personaje.status}</h2>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>Origin Planet</h4><h2 className='details-description'>{personaje.originplanet}</h2>            
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>Transform</h4><h2 className='details-description'>{personaje.transform}</h2>
          </div>      
        </div>
      </div>
    </div>
  )
}
export {InfoPersonaje}