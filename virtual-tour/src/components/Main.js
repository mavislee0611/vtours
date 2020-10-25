import React, { useEffect, useState } from "react";
import './main.css'
import map from '../img/map.png'
import { Link } from 'react-router-dom'


function Main() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
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

      <h1 className="title"> Salem, MA </h1>
      <div className="description">
        A coastal city located in North Shore Massachusetts founded in 1626, Salem has lot of history to learn about!
      </div>



      <div>
        <h2 className="counter"> Countdown until Halloween {year}!</h2>
        <div>{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>

      </div>

      <div className="halloween">
        <h3> Get in the Halloween Spirit at Home! </h3>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DX5wKo5TFHaQH"> Click here to listen to a Halloween playlist </a>
        <h2> </h2>
        <a href="https://www.thebestideasforkids.com/halloween-crafts-for-kids/"> Click here to learn how to make a Halloween craft </a>
      </div>

      <div className="description2">
        Click on the orange flags to visit a place in downtown Salem!
      </div>

      <img className="map" src={map} alt="map" usemap="#image-map" />

      <map name="image-map">
        <area alt="Witch House" title="Witch House" href="https://www.thewitchhouse.org" coords="66,274,9" shape="circle" target="_blank" />
        <area alt="Tavern in the Square" title="Tavern in the Square" href="https://www.thederbysalem.com/" coords="211,397,9" shape="circle" target="_blank" />
        <area alt="Rockafellas" title="Rockafellas" href="https://www.rockafellasofsalem.com" coords="226,320,10" shape="circle" target="_blank" />
        <area alt="Artist's row" title="Artist's row" href="https://www.artistsrowsalem.com" coords="243,402,12" shape="circle" target="_blank" />
        <area alt="Witch Dungeon Museum" title="Witch Dungeon Museum" href="http://www.witchdungeon.com/witchdungeon.html" coords="154,195,12" shape="circle" target="_blank" />
        <area alt="Old Town Hall" title="Old Town Hall" href="https://www.salem.org/venue/old-town-hall/" coords="264,354,10" shape="circle" target="_blank" />
        <area alt="Museum Place Mall" title="Museum Place Mall" href="https://foursquare.com/v/museum-place-mall/4debb9dd18386283a4065021" coords="320,287,12" shape="circle" target="_blank" />
        <area alt="Peabody Essex Museum" title="Peabody Essex Museum" href="https://www.pem.org" coords="331,349,11" shape="circle" target="_blank" />
        <area alt="Witch Trials Memorial" title="Witch Trials Memorial" href="http://www.salemweb.com/memorial/memorial.php" coords="400,377,10" shape="circle" target="_blank" />
        <area alt="Pirate Museum" title="Pirate Museum" href="http://www.piratemuseum.com" coords="462,402,11" shape="circle" target="_blank" />
        <area alt="Salem Witch Museum" title="Salem Witch Museum" href="https://salemwitchmuseum.com" coords="464,233,10" shape="circle" target="_blank" />
        <area alt="Inn on Washington Square" title="Inn on Washington Square" href="http://thesteppingstoneinn.com" coords="580,158,12" shape="circle" target="_blank" />
        <area alt="Hawthorne Hotel" title="Hawthorne Hotel" href="https://www.hawthornehotel.com" coords="493,292,10" shape="circle" target="_blank" />
        <area alt="Sixty2" title="Sixty2" href="https://www.yelp.com/biz/sixty2-on-wharf-salem-4" coords="530,460,10" shape="circle" target="_blank" />
        <area alt="Finz " title="Finz " href="https://hipfinz.com" coords="546,508,12" shape="circle" target="_blank" />
        <area alt="Victoria Station" title="Victoria Station" href="http://www.victoriastationsalem.com" coords="595,517,11" shape="circle" target="_blank" />
        <area alt="Jaho Cafe" title="Jaho Cafe" href="https://www.jaho.com" coords="583,431,12" shape="circle" target="_blank" />
        <area alt="Witch's Brew" title="Witch's Brew" href="https://www.witchsbrewcafe.com" coords="675,388,10" shape="circle" target="_blank" />
        <area alt="In a Pig's Eye" title="In a Pig's Eye" href="https://www.mercysalem.com/pub/" coords="705,378,10" shape="circle" target="_blank" />
        <area alt="The House of the Seven Gables" title="The House of the Seven Gables" href="https://7gables.org" coords="796,439,12" shape="circle" target="_blank" />
        <area alt="Grapevine Restaurant" title="Grapevine Restaurant" href="https://www.yelp.com/biz/grapevine-restaurant-salem-2" coords="463,473,10" shape="circle" target="_blank" />
        <area alt="Witch Dungeon Museum" title="Witch Dungeon Museum" href="http://www.witchdungeon.com/witchdungeon.html" coords="154,195,12" shape="circle" target="_blank" />
        <area alt="Old Town Hall" title="Old Town Hall" href="https://www.salem.org/venue/old-town-hall/" coords="264,354,10" shape="circle" target="_blank" />
        <area alt="Museum Place Mall" title="Museum Place Mall" href="https://foursquare.com/v/museum-place-mall/4debb9dd18386283a4065021" coords="320,287,12" shape="circle" target="_blank" />
        <area alt="Peabody Essex Museum" title="Peabody Essex Museum" href="https://www.pem.org" coords="331,349,11" shape="circle" target="_blank" />
        <area alt="Witch Trials Memorial" title="Witch Trials Memorial" href="http://www.salemweb.com/memorial/memorial.php" coords="400,377,10" shape="circle" target="_blank" />
        <area alt="Pirate Museum" title="Pirate Museum" href="http://www.piratemuseum.com" coords="462,402,11" shape="circle" target="_blank" />
        <area alt="Salem Witch Museum" title="Salem Witch Museum" href="https://salemwitchmuseum.com" coords="464,233,10" shape="circle" target="_blank" />
        <area alt="Inn on Washington Square" title="Inn on Washington Square" href="http://thesteppingstoneinn.com" coords="580,158,12" shape="circle" target="_blank" />
        <area alt="Hawthorne Hotel" title="Hawthorne Hotel" href="https://www.hawthornehotel.com" coords="493,292,10" shape="circle" target="_blank" />
        <area alt="Sixty2" title="Sixty2" href="https://www.yelp.com/biz/sixty2-on-wharf-salem-4" coords="530,460,10" shape="circle" target="_blank" />
        <area alt="Finz " title="Finz " href="https://hipfinz.com" coords="546,508,12" shape="circle" target="_blank" />
        <area alt="Victoria Station" title="Victoria Station" href="https://www.salemnews.com/news/local_news/victoria-station-shut-down/article_020c0e75-0f57-527a-9cce-0958b82dd8d7.html" coords="595,517,11" shape="circle" target="_blank" />
        <area alt="Jaho Cafe" title="Jaho Cafe" href="https://www.jaho.com" coords="583,431,12" shape="circle" target="_blank" />
        <area alt="Witch's Brew" title="Witch's Brew" href="https://www.witchsbrewcafe.com" coords="675,388,10" shape="circle" target="_blank" />
        <area alt="In a Pig's Eye" title="In a Pig's Eye" href="https://www.mercysalem.com/pub/" coords="705,378,10" shape="circle" target="_blank" />
        <area alt="The House of the Seven Gables" title="The House of the Seven Gables" href="https://7gables.org" coords="796,439,12" shape="circle" target="_blank" />
        <area alt="Grapevine Restaurant" title="Grapevine Restaurant" href="https://www.yelp.com/biz/grapevine-restaurant-salem-2" coords="463,473,10" shape="circle" target="_blank" />
      </map>





    </div>

  );
}

export default Main;