import React from 'react';
import './Menu.css';
import dish from './dish.webp';
import d1 from './d1.avif';
import d2 from './d2.avif';
import d3 from './d3.avif';
import d4 from './d4.avif';
import d5 from './d5.avif';
import d6 from './d6.avif';
const Menu = () => {
  return (
    <>

    <div className="menuContainer" id="menu">
      <div className="menuHead goldenLine">
        Delicious Food For You
      </div>
      <div className="mainMenu">
        <div className="dishes">
          <img src={d1} alt="" height={200} width={300} />
          <div className="text">
          <h2>#Dosa</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">
          <div className="price">₹250</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
        <div className="dishes">
          <img src={d2} alt="" height={200} width={300} />
          <div className="text">
          <h2>#French-Fries</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">          
          <div className="price">₹50</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
        <div className="dishes">
          <img src={d3} alt="" height={200} width={300} />
          <div className="text">
          <h2>#Spring-Rolls</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">          
          <div className="price">₹100</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
        <div className="dishes">
          <img src={d4} alt="" height={200} width={300} />
          <div className="text">
          <h2>#Pizza</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">          
          <div className="price">₹200</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
        <div className="dishes">
          <img src={d5} alt="" height={200} width={300} />
          <div className="text">
          <h2>#Chilli-Paneer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">          
          <div className="price">₹300</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
        <div className="dishes">
          <img src={d6} alt="" height={200} width={300} />
          <div className="text">
          <h2>#Idli-Sambar</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam repellendus facilis.</p>
          <div className="details">          
          <div className="price">₹200</div>
          <button className='orderNow'>Buy Now</button>
          </div>
          </div>
        </div>
      </div>

    </div>
    
    
    </>
  );
};

export default Menu;
