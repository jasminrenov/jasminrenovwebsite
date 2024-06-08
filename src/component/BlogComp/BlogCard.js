import React from 'react'
import "./BlogImgCard.css"

function BlogCard({title, paragraph, blogLink}) {
  return (
    <div className='blog-card'>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <a className='color-red underline-none' href={blogLink}>Read More</a>
    </div>
  )
}

export default BlogCard