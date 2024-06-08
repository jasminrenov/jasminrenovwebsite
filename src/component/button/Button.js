import React from 'react'
import "./Button.css"

const Button = ({name,className}) => {
  return (
    <button className={`common_button ${className}`}>{name}</button>
  )
}

export default Button