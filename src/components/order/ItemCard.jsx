import React from 'react'

const ItemCard = ({img , title , description}) => {
    // console.log(JSON.parse(img))
    return (
        <div>
            <div className="item-div">
                <img src={img} alt="" />
                <div className="dishInfo">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button className="orderNow">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
