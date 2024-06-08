import React from 'react'
import "./Button.css"

const Button = ({name,className}) => {
  return (
    <button className={`common_button ${className} font-20-res-10`}>{name}</button>
  )
}

export default Button