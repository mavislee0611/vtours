import React from 'react'
import map from '../img/usmappin.png'
import './intro.css'
import { Link } from 'react-router-dom'
import logo from '../img/vtour-logo.png'


function Intro() {
  return (
    <div className="background">
      <h1 className="title">
        <img src={logo} alt="vTour logo" />
      </h1>
      <div className="description">
        Our mission is to encourage individuals to stay home this year instead of traveling by providing a safe virtual environnment where they can explore some of their favorite towns. Our website allows for you to experience the cities of Salem, MA and Boston, MA virtually by learning more about their history and culture.
         <br />
        You can navigate to the towns and click around their maps to find locally run businesses as well as tourist spots.
      </div>

      <div className="description3">
        Click on the pins to explore local businesses at that location!
      </div>

      <img className="map" src={map} alt="us map" usemap="#image-map3" />
      <map name="image-map3">
        <Link to="/main" className="page">
          <area target="" alt="Salem" title="Salem" href="" coords="759,136,8" shape="circle" />
        </Link>
        <Link to="/main2" className="page">
          <area target="" alt="Boston" title="Boston" href="" coords="773,143,10" shape="circle" />
        </Link>
      </map>
    </div>

  )
}

export default Intro
