import React from 'react'
import './Card.css'

export default function Cards({personaje}) {
  return (
    <div className='cards-container'>
      
      {personaje.map((item,index)=>(
        <div key={index}>
          <div className='card-container'>
            <div className='card-title'>
              <h2>{item.name}</h2>
            </div>
            <div className='card-universe'>4
              <h3>Universo {item.universe}</h3>
            </div>
            <div className='card-image'>
              <img src={item.imageUrl} alt='personaje'></img>
            </div>
            {/* <button>
              <a href=''>Ver Ficha</a>
            </button>             */}
          </div>
        </div>  
      ))}
      </div>
      
  )
}
