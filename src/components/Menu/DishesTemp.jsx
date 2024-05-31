import React from 'react'

const DishesTemp = ({img , title , description , price}) => {
  // console.log(img)
  return (
    <div>
      <div className="dishes">
          <img src={img} alt="" height={200} width={300} />
          <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="details">
          <div className="price">₹{price}</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default DishesTemp
