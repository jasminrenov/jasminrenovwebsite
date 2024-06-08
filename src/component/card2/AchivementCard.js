import React from 'react'

function AchivementCard({imgUrl}) {
  return (
    <div style={{ width: "280px", height: "280px", margin: "auto"}}>
      <img style={{ width: "100%", height: "100%", objectFit: "cover"}} src={imgUrl} alt="achievements" />
    </div>
  )
}

export default AchivementCard