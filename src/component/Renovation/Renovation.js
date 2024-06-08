import React from 'react'
import './Renovation.css'
import Button from '../button/Button'

function Renovation({title, paragraph}) {
  return (
    // <div className='interiorRenovation-portion'>
    <>
      <div className='interiorRenovation-img'>
        <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg" alt="background images" />
      <div className='interiorRenovation-content'>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <Button name={"Devis gratuit"}/>
        {/* <Button hyperlink="#" name="Devis gratuit" /> */}
      </div>
      </div>
    </>
    // </div>
  )
}

export default Renovation