import React from 'react';
import { useRef , useState } from 'react';
import './Header.css';
import bar from './icon.png'
const Header = () => {

  const showMenuBar = useRef();
  const afterSmallScreem = useRef();
  const [toggleMenu, setToggleMenu] = useState(true);
  function showMenu(){
    console.log()
    if(toggleMenu){
      afterSmallScreem.current.style.visibility = 'visible';
    } 
    else{
      afterSmallScreem.current.style.visibility = 'hidden';
    }
    setToggleMenu(!toggleMenu);
  }

  function hideAfterClick(){
    setToggleMenu(!toggleMenu);
    afterSmallScreem.current.style.visibility = 'hidden';
  }
  return (
    <header>
      <nav id='navbar'>
        <ul>
          <li id="logo">Logo</li>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Dishes</a></li>
          <li><a href="#orderNow">Order Now</a></li>
          {/* <li><a href="#reviews">reviews</a></li> */}
          <div className="right">
          <li className='signlogin'><a href="#signIn">sign In</a></li>
          </div>
        </ul>
      </nav>

      <div id="menubar" ref={showMenuBar} onClick={showMenu}>
        <div className="right">
          <img src={bar} alt="" />
        </div>
      </div>

      <div className="afterSmallScreen hideIt" ref={afterSmallScreem}>
          <div className='div'>
            <li><a href="#home" onClick={hideAfterClick}>Home </a></li>
            <li><a href="#menu" onClick={hideAfterClick}> Dishes </a></li>
            <li><a href="#orderNow" onClick={hideAfterClick}>Our Team</a></li>
            <li><a href="#signlogin" onClick={hideAfterClick}> Sign In </a></li>
          </div>
        </div>
    </header>
  );
};

export default Header;


// 800 and 700