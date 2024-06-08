import React from 'react'
import "./custom-slick.css"

const SliderCard = ({title,date,paragraph}) => {
  return (
    <div className='card_slider'>
        <h1 className='font-20-res-16 weight-600'>{title}</h1>
        <p className='font-16-res-10'>{date}</p>
        <p className='font-18-res-16'>{paragraph}</p>
        <button className=''>Lire plus</button>
    </div>
  )
}

export default SliderCard