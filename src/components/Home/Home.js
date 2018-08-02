import React from 'react';

import './Home.css';
import radioAstro from '../../assets/images/radio-astro.png';

class Home extends React.Component {
  render () {
    return (
      <div className = "Home">
      <div>
      <h2 className="title col-xs-12 col-md-8">Planet Jam  <img src={radioAstro} alt=""/></h2>
      </div>

      </div>
    );
  }
}

export default Home;
