import React from 'react'
import Card from '../Cards/Card'
import './Product.css'
function Product() {
  let info = [
    {
      imgSrc : "https://picsum.photos/300/400",
      title1 : "Work Flows",
      title2 : "That Works",
      description : "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgSrc : 'https://picsum.photos/300/400',
      title1 : "Work Flows",
      title2 : "That Works",
      description : "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgSrc : 'https://picsum.photos/300/400',
      title1 : "Work Flows",
      title2 : "That Works",
      description : "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgSrc : 'https://picsum.photos/300/400',
      title1 : "Work Flows",
      title2 : "That Works",
      description : "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ]
  return (
    <div className='productpage'>
        {info.map((info)=>{
          return <Card imgSrc={info.imgSrc} title1={info.title1} title2={info.title2} description={info.description}/>
        })}
    </div>
  )
}

export default Product