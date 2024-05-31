import React from 'react';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Order from './components/order/Order';
import Review from './components/Reviews/Review';
import Footer from './components/Footer/Footer';




import './App.css'

function App() {
  return (
    <div className="App">
      <Home/>
      <Menu/>
      <hr />
      <Order/>
      <hr/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
