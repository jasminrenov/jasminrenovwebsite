import React from 'react'

function Information({logo, title, paragraph}) {
  return (
    <div>
      <div className='d-flex text-start gap-2 align-items-center'>
        <img style={{height:"24px"}} src={logo} alt={title} />
        <h4>{title}</h4>
      </div>
      <p className='text-start'>{paragraph}</p>
    </div>
  )
}

export default Information