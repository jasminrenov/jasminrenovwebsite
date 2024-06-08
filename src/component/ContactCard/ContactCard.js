import React from 'react'
import './ContactCard.css'

function ContactCard({ title, icon, contactOne, contactTwo }) {
  return (
    <div className='contact-card'>
      <h4>{title}</h4>
      <hr className='contact-hr' />
      <div className='d-flex align-items-start gap-3'>
        <img width="26px" src={icon} alt={title} />
        <div>
          <strong className='contact-title'>{contactOne}</strong>
          <p>{contactTwo}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard