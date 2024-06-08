import React from 'react'
import "./Button.css"

const WhiteButton = ({name,className}) => {
  return (
    <button className={`common_button2 ${className}`}>{name}</button>
  )
}

export default WhiteButton