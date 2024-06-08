import React from 'react'
import './HeroComponent.css'
import Button from '../button/Button'


function HeroComponent({videoSrc, title, describe, btnLink, btnName}) {
  return (
    <div className='hero-portion'>
      <video autoPlay muted loop id="myVideo">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className='hero-content-portion'>
        <h1><strong>{title}</strong></h1>
        <p>{describe}</p>
        <Button hyperlink={btnLink} name={btnName} />
      </div>
    </div>
  )
}

export default HeroComponent