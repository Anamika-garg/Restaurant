import React from 'react'

const ReviewTemp = ({text , img , name}) => {
  return (
    <div>
    <div className="review-div">
        <div className="review">
            <div className="review-text">
            {text} 
            </div>
        </div>
        <div className="reviewer">
          <img src={img} alt="" />
          <div className="person-detail">
          <h3>{name}</h3>
          </div>
        </div>
    </div>      
    </div>
  )
}

export default ReviewTemp
