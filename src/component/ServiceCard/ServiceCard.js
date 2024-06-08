import React from 'react'

function ServiceCard({imgUrl, title}) {
  return (
    <div>
      <img style={{width: "310px", height: "350px", objectFit: "cover", margin: "0 0 1rem 0"}} src={imgUrl} alt="services" />
      <h4 style={{textAlign: "left"}}>{title}</h4>
    </div>
  )
}

export default ServiceCard