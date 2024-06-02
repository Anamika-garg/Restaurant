import React from "react";
import person from "./person.webp";
import person2 from "./person2.webp";
import ReviewTemp from "./ReviewTemp";
// import "./Review.css";

const Review = () => {
 
  return (
    
    
    <div id="reviews">
      <div className="reviewContainer">
        <h2>Our Customer's Say</h2>
        <h3>Testimomials</h3>

        <div className="reviewSec">
          <div className="forCarausals">

            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque easperiores non quam "'} name={"Robert Thomson"} img={person} />

            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Kristania Chauhan"} img={person2}/>
            
            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Robert Thomson"} img={person}/>

            

          </div>
          </div>





          {/* <div className = "forAnimationDiv">
            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Robert Thomson"} img={person}/>


            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Kristania Chauhan"} img={person2}/>

            
            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Robert Thomson"} img={person}/>

            </div> */}
          {/* <div className = "forAnimationDiv">
            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Robert Thomson"} img={person}/>


            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Kristania Chauhan"} img={person2}/>

            
            <ReviewTemp text={'"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam "'} name={"Robert Thomson"} img={person}/>

            </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Review;
