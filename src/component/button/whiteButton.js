import React from 'react'
import "./Button.css"

const WhiteButton = ({name,className}) => {
  return (
    <button className={`common_button2 ${className} font-20-res-10`}>{name}</button>
  )
}

export default WhiteButton