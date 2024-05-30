import React from 'react';
import './Menu.css';
import dish from './dish.webp'
const Menu = () => {
  return (
    <>

    <div className="menuContainer" id="menu">
      <div className="menuHead goldenLine">
        Delicious Food For You
      </div>
      <div className="mainMenu">
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
        <div className="dishes">
          <img src={dish} alt="" height={200} width={300} />
          <div className="text">
          <h2>#dish</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="price">$10</div>
          </div>
        </div>
      </div>

    </div>
    
    
    </>
  );
};

export default Menu;
