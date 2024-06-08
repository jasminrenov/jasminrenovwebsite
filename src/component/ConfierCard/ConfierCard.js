import React from 'react'
import "./ConfierCard.css"
import image_icon from "../../Assets/home.webp"


const ConfierCard = ({title,paragraph}) => {
  return (
    <div className='confier_card'>
        <div className='circle_portion_icon'>
            <img src={image_icon} alt='' className='image_icon_'/>
        </div>
        <h1 className='font-20-res-16 weight-500 mt-20'>{title}</h1>
        <p className='font-16-res-14 weight-300 mt-40'>{paragraph}</p>
    </div>
  )
}

export default ConfierCard