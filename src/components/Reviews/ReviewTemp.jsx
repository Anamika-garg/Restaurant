import React from 'react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ReviewTemp = ({text , img , name}) => {
  
  return (
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
  )
}

export default ReviewTemp
