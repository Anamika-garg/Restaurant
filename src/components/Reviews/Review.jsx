import React from 'react';
import person from './person.webp';
import person2 from './person2.webp'
import './Review.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Review = () => {
  return (
    <div id='reviews'>
      <div className="reviewParentContainer">
      <div className="reviewContainer con1">
        <h2>Our Customer's Say</h2>
        <h3>Testimomials</h3>
        <div className="reviewSec">
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person2} alt="" />
                  <div className="person-detail">
                  <h3>Kristania Chauhan</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className="reviewContainer con2">
        <h2>Our Customer's Say</h2>
        <h3>Testimomials</h3>
        <div className="reviewSec">
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person2} alt="" />
                  <div className="person-detail">
                  <h3>Kristania Chauhan</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className="reviewContainer con3">
        <h2>Our Customer's Say</h2>
        <h3>Testimomials</h3>
        <div className="reviewSec">
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person2} alt="" />
                  <div className="person-detail">
                  <h3>Kristania Chauhan</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
            <div className="review-div">
                <div className="review">
                    <div className="review-text">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ea asperiores non quam 
                    </div>
                </div>
                <div className="reviewer">
                  <img src={person} alt="" />
                  <div className="person-detail">
                  <h3>Robert Thomson</h3>
                  {/* <FontAwesomeIcon icon="fa-kit fa-my-icon" /> */}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Review
