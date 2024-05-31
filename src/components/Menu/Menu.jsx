import React from 'react';
import './Menu.css';
import DishesTemp from './DishesTemp';
import dosa from './img/dosa.avif';
import frenchfries from './img/frenchfries.avif';
import springRolls from './img/springRolls.avif';
import Pizza from './img/Pizza.avif';
import ChilliPaneer from './img/ChilliPaneer.avif';
import Idli from './img/Idli.avif';
const Menu = () => {
  return (
    <>

      <div className="menuContainer" id="menu">
        <div className="menuHead goldenLine">
          Delicious Food For You
        </div>
        <div className="mainMenu">

          <DishesTemp img={dosa} title={"Dosa"} description={"Crispy, golden dosa sizzling on the griddle, ready to be savored with a dollop of spicy chutney"} price={200} />

          <DishesTemp img={frenchfries} title={"French-Fries"} description={"Golden, crunchy french fries, a timeless indulgence loved by all ages."} price={100} />

          <DishesTemp img={springRolls} title={"Spring Rolls"} description={"Crispy spring roll, bursting with flavorful fillings, a delightful appetizer for any occasion."} price={100} />

          <DishesTemp img={Pizza} title={"Pizza"} description={"Cheesy, gooey pizza with a perfect crust, a slice of happiness for pizza enthusiasts worldwide"} price={210} />

          <DishesTemp img={ChilliPaneer} title={"Chilli-Paneer"} description={"Tangy and spicy chilli-paneer, a tantalizing Indo-Chinese fusion dish that delights the taste buds with every bite."} price={250} />

          <DishesTemp img={Idli} title={"Idli-Sambhar"} description={"Soft, fluffy idlis bathed in aromatic sambhar, a South Indian comfort food that never fails to satisfy"} price={150} />

        </div>

      </div>


    </>
  );
};

export default Menu;
