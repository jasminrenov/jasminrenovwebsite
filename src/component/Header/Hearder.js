import React from 'react'

function Header({heading}) {
  return (
    <div>
      <hr style={{border: "2px solid #e81a4b", width: "150px"}} className='m-auto mb-3' />
      <h2 className='mb-5 text-center'>{heading}</h2>
    </div>
  )
}

export default Header