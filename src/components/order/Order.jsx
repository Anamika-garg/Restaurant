import React from 'react';
import dish from './dish.webp';
import OrderItemTemp from './OrderItemTemp';
import './Order.css'
const Order = () => {
    return (
        <div id='orderNow'>
            <div className="orderContainer">
                <h1 className="mainHeading goldenLine">Order Now</h1>
                <div className='All-Items'>

                    <div className="todaySpecial orderItems">

                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Today's Special"/>

                    </div>


                    <div className="TopPicks orderItems">
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Top Picks For You"/>
                    </div>

                    <div className="FrequentlyOrdered orderItems">
                        
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Frequently Ordered"/>
                    </div>

                    <div className="PreviousOrders orderItems">
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Previous Orders"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;
