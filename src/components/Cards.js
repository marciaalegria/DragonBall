import React, { useContext} from 'react'
import { DataContext } from '../context/DataContext'
import './Card.css'

function Cards() {
  const {personaje} = useContext(DataContext);
  return (
    <div className='cards-container'>
      {personaje.map((item,index)=>(
        <div key={index}>
          <div className='card-container'>
            <div className='card-title'>
              <h2>{item.name}</h2>
            </div>
            <div className='card-universe'>
              <h3>Universo {item.universe}</h3>
            </div>
            <div className='card-image'>
              <img src={item.imageUrl} alt='personaje'></img>
            </div>
            <button className='card-btn'>
              <a href=''>Ver Ficha</a>
            </button>
          </div>
        </div>  
      ))}
      </div>
  )
}
export {Cards};