import React from 'react';
import './Menu.css';
import DishesTemp from './DishesTemp';
import d1 from './img/d1.avif';
import d2 from './img/d2.avif';
import d3 from './img/d3.avif';
import d4 from './img/d4.avif';
import d5 from './img/d5.avif';
import d6 from './img/d6.avif';
const Menu = () => {
  return (
    <>

      <div className="menuContainer" id="menu">
        <div className="menuHead goldenLine">
          Delicious Food For You
        </div>
        <div className="mainMenu">

          <DishesTemp img={d1} title={"Dosa"} description={"Crispy, golden dosa sizzling on the griddle, ready to be savored with a dollop of spicy chutney"} price={200} />

          <DishesTemp img={d2} title={"French-Fries"} description={"Golden, crunchy french fries, a timeless indulgence loved by all ages."} price={100} />

          <DishesTemp img={d3} title={"Spring Rolls"} description={"Crispy spring roll, bursting with flavorful fillings, a delightful appetizer for any occasion."} price={100} />

          <DishesTemp img={d4} title={"Pizza"} description={"Cheesy, gooey pizza with a perfect crust, a slice of happiness for pizza enthusiasts worldwide"} price={210} />

          <DishesTemp img={d5} title={"Chilli-Paneer"} description={"Tangy and spicy chilli-paneer, a tantalizing Indo-Chinese fusion dish that delights the taste buds with every bite."} price={250} />

          <DishesTemp img={d6} title={"Idli-Sambhar"} description={"Soft, fluffy idlis bathed in aromatic sambhar, a South Indian comfort food that never fails to satisfy"} price={150} />

        </div>

      </div>


    </>
  );
};

export default Menu;
