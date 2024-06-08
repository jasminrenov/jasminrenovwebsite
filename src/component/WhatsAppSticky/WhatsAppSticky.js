import React from 'react'
import { Link } from 'react-router-dom'
import './WhatsAppSticky.css'
import WhatsApp_icon from '../../Assets/WhatsApp_icon.png'

function WhatsAppSticky() {
  return (
    <div className='wa-sticky'>
        <Link to="https://wa.me/+33605625019" className="social_icon" target="_blank" alt="whatsapp" >
            <div className='wa-icon1'>
                <img src={WhatsApp_icon} alt="whatsapp icon" />
            </div>
        </Link>
    </div>
  )
}

export default WhatsAppSticky