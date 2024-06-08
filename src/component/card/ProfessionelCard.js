import React from 'react'
import './ProfessionelCard.css'

function ProfessionelCard({icon, title, paragraph}) {
  return (
    <div className='customCard'>
      <div className='img-container mb-2'>
        <img src={icon} alt={title} />
      </div>
      <h4 className='mb-2'>{title}</h4>
      <p>{paragraph}</p>
    </div>
  )
}

export default ProfessionelCard