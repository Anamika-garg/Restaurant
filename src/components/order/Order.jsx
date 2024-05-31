import React from 'react';
import dosa from './orderimg/dosa.avif';
import frenchfries from './orderimg/frenchfries.avif';
import springRolls from './orderimg/springRolls.avif';
import Pizza from './orderimg/Pizza.avif';
import ChilliPaneer from './orderimg/ChilliPaneer.avif';
import Idli from './orderimg/Idli.avif';
import OrderItemTemp from './OrderItemTemp';
import './Order.css'
const Order = () => {
    return (
        <div id='orderNow'>
            <div className="orderContainer">
                <h1 className="mainHeading goldenLine">Order Now</h1>
                <div className='All-Items'>

                    <div className="todaySpecial orderItems">

                        <OrderItemTemp Heading = "Today's Special"
                         mydata = {[{
                            title : "Dosa",
                            img : dosa,
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            img : Idli,
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            img : ChilliPaneer,
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]}/>

                    </div>


                    <div className="TopPicks orderItems">
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            img : dosa,
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            img : Idli,
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            img : ChilliPaneer,
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Top Picks For You"/>
                    </div>

                    <div className="FrequentlyOrdered orderItems">
                        
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            img : dosa,
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            img : Idli,
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            img : ChilliPaneer,
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Frequently Ordered"/>
                    </div>

                    <div className="PreviousOrders orderItems">
                        <OrderItemTemp mydata = {[{
                            title : "Dosa",
                            img : dosa,
                            description : "Crispy, golden dosa sizzling on the griddle"
                        },
                        {
                            title : "Idli",
                            img : Idli,
                            description : "South Indian comfort food that never fails to satisfy"
                        },
                        {
                            title : "Chilli-Paneer",
                            img : ChilliPaneer,
                            description : "Indo-Chinese fusion dish that delights the taste buds with every bite."
                        }]} Heading = "Previous Orders"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;
