import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'
import './Card.css'

function Cards() {
  const {personajes} = useContext(DataContext)
  
  return (
    <div className='cards-container'> 
      {personajes.map((item,index)=>(
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
            <Link to={`/info?${item.name}`}><p className='card-btn'>Ver Ficha</p></Link>
          </div>
        </div>  
      ))}
      </div>
  )
}
export {Cards};