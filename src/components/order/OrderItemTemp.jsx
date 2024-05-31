import React from 'react';
import dish from './dish.webp'
import ItemCard from './ItemCard'

const OrderItemTemp = ({ Heading, mydata }) => {
    console.log(mydata)
    return (
        <div>

            <h2 className='goldenLine'>{Heading}</h2>
            <div className="items">
                {
                    mydata.map(element => {
                        return (
                            <ItemCard key={element.title} img={dish} title={element.title} description={element.description} />
                        )
                })
                }
            </div>
        </div>
    )
}

export default OrderItemTemp
