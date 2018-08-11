import React from 'react';

import './Home.css';
import radioAstro from '../../assets/images/radio-astro.png';
import home from '../../assets/images/homeLabel.png';

class Home extends React.Component {
  render () {
    return (
      <div className = "Home">
      <div>
        <div className="homeImage col-md-6">
        {/* <img src={home} alt="home"/> */}
        </div>
      <h2 className="title col-xs-12">Planet Jam</h2>
      <img className="spaceman text-center" src={radioAstro} alt=""/>
      </div>

      </div>
    );
  }
}

export default Home;
