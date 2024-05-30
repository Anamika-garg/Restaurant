import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li id="logo">Logo</li>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Dishes</a></li>
          <li><a href="#orderNow">Order Now</a></li>
          <li><a href="#reviews">reviews</a></li>
          <div className="right">
          <li className='signlogin'><a href="#signup">sign Up</a></li>
          <li className='signlogin'><a href="#login">login</a></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
