import React from 'react';
import dish from './dish.webp'
import './Order.css'
const Order = () => {
    return (
        <div id='orderNow'>
            <div className="orderContainer">
                <h1 className="mainHeading goldenLine">Order Now</h1>
                <div className='All-Items'>
                    <div className="todaySpecial orderItems">
                        <h2 className='goldenLine'>Today's Special</h2>
                        <div className="items">
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TopPicks orderItems">
                        <h2 className='goldenLine'>Top Picks For You</h2>
                        <div className="items">
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FrequentlyOrdered orderItems">
                        <h2 className='goldenLine'>Frequently Ordered</h2>
                        <div className="items">
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="PreviousOrders orderItems">
                        <h2 className='goldenLine'>Previous Orders</h2>
                        <div className="items">
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                            <div className="item-div">
                                <img src={dish} alt="" />
                                <div className="dishInfo">
                                    <h4>#DishName</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <button className="orderNow">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
