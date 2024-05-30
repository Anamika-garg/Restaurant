import React from 'react'
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  return (
    <>
      <Header></Header>
    <div id='home'>
      <div className="container">
        <div className="mainText">
          Fresh and Delicious Food <br></br> For Your Health
        </div>
        <button className="menubtn">Menus</button>
      </div>
    </div>
    </>
  )
}

export default Home
