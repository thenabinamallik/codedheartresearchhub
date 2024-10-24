import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.imgSrc} alt="" />
        <h1>{props.title1}<br/>{props.title2}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card;