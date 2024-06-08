import React from 'react'
import './RewardCard.css'

function ReviewCard({review, author}) {
  return (
    <div className='review-card'>
      <p>{review}</p>
      <strong>{author}</strong>
    </div>
  )
}

export default ReviewCard