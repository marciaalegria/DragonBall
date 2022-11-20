
import React from 'react'
import './InfoPersonaje.css'

//obtener nombre del personaje de la ruta html
//al obtenerla filtrar los datos del dato de context


function InfoPersonaje() {

  return (
    <div className='info'>
      <div className='info-section'>
        <div className='info-btn'>
          <button>Ir al inicio</button>
        </div>
        <div className='info-image'>
        <img src='image.png' alt=''></img>
        </div>
      </div>
      <div className='info-personaje'>
        <div className='info-personaje-image'>
          <h1>imagen personaje</h1>
        </div>
        <div className='info-personaje-datos'>
          <h1>Iwen</h1>
          <div className='datos-universe'>
            <h3>universo</h3>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>especie</h4>
            <h4 className='details-description'>respuest</h4>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>rol</h4><h2 className='details-description'>respuest</h2>
          </div>
          <div className='datos-universe-details'>
          <h4 className='details-title'>status</h4><h2 className='details-description'>respuest</h2>
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>origin planet</h4><h2 className='details-description'>respuest</h2>            
          </div>
          <div className='datos-universe-details'>
            <h4 className='details-title'>transform</h4><h2 className='details-description'>respuest</h2>
          </div>      
        </div>
      </div>
    </div>
  )
}
export {InfoPersonaje}