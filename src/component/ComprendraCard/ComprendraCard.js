import React from 'react'
import "./ComprendraCard.css"

const ComprendraCard = ({title,paragraph,count}) => {
  return (
    <div className='comprendraCard'>
        
            <h1 className='red_letter'>{count}</h1>
            
        <h1 className='font-20-res-16 weight-500 mt-20'>{title}</h1>
        <p className='font-16-res-14 weight-300 mt-40'>{paragraph}</p>
    </div>
  )
}

export default ComprendraCard