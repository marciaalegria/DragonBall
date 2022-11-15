import React from 'react'
import './Card.css'

export default function Cards(title, universe, image) {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <h2>{title}</h2>
      </div>
      <div className='card-universe'>
        <h3>{universe}</h3>
      </div>
      <div className='image-container'>
        <img src={image} alt=''></img>
      </div>
      <button>
        <a>Ver Ficha</a>
      </button>
    </div>
  )
}
