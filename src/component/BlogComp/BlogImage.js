import React from 'react'
import "./BlogImgCard.css"

function BlogImgCard({imgUrl, title, paragraph}) {
  return (
    <div className='blogImg-Card'>
      <div className=''>
        <img src={imgUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default BlogImgCard