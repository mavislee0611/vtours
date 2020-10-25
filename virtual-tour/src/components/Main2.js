import React from 'react'
import map from '../img/bostonmap.png'
import './main2.css'
import { Link } from 'react-router-dom'


function Main2() {
  return (
    <div className="background">

      <div className="towns">
        <div className="town">
          <Link to="/main" className="page">
            Salem, MA
          </Link>
        </div>
        <div className="town">
          |
        </div>
        <div className="town">
          <Link to="/main2" className="page">
            Boston, MA
          </Link>
        </div>
      </div>

      <h1 className="title" > Boston, MA </h1>
      <div className="description" > As the captial and largest city in Massachusetts, Boston has many historical sites to visit. Interact with our map to explore more about Boston! </div>

      <div className="description2">
        Click on the numbers to visit a place in downtown Boston!
      </div>

      <img className="map" src={map} usemap="
        #image-map2" alt="boston map" />
      <map name="image-map2">
        <area target="" alt="New England Aquarium" title="New England Aquarium" href="https://www.neaq.org" coords="743,362,12" shape="circle" />
        <area target="" alt="Paul Revere House" title="Paul Revere House" href="https://www.paulreverehouse.org" coords="735,242,13" shape="circle" />
        <area target="" alt="Faneuil Hall" title="Faneuil Hall" href="https://faneuilhallmarketplace.com" coords="637,311,9" shape="circle" />
        <area target="" alt="Radisson Inn" title="Radisson Inn" href="https://www.radissonhotels.com/en-us/hotels/country-inn-brockton-ma?cid=a:se+b:gmb+c:amer+i:local+e:cis+d:us+h:MABROCTY" coords="371,462,14" shape="circle" />
        <area target="" alt="Four Seasons Hotel" title="Four Seasons Hotel" href="https://www.fourseasons.com/boston/" coords="401,389,12" shape="circle" />
        <area target="" alt="Public Gardens" title="Public Gardens" href="https://www.boston.gov/parks/public-garden" coords="365,275,14" shape="circle" />
        <area target="" alt="Boston Burger" title="Boston Burger" href="https://www.bostonburgercompany.com" coords="212,367,13" shape="circle" />
        <area target="" alt="Amelia's Taqueria" title="Amelia's Taqueria" href="https://ameliastaqueria.com" coords="95,423,12" shape="circle" />
        <area target="" alt="Vintage Taste" title="Vintage Taste" href="https://www.vintagetasteboston.com" coords="171,25,10" shape="circle" />
        <area target="" alt="Crush Boutique" title="Crush Boutique" href="https://www.shopcrushboutique.com" coords="396,245,13" shape="circle" />
        <area target="" alt="Emmets" title="Emmets" href="http://www.emmetsirishpubandrestaurant.com" coords="490,315,12" shape="circle" />
        <area target="" alt="Robins Flower Shop" title="Robins Flower Shop" href="https://robinsflowershop.com" coords="477,170,11" shape="circle" />
        <area target="" alt="Paul Revere House" title="Paul Revere House" href="https://www.paulreverehouse.org" coords="1328,438,21" shape="circle" />
        <area target="" alt="" title="" href="" coords="NaN" shape="circle" />
      </map>

    </div >
  )
}

export default Main2