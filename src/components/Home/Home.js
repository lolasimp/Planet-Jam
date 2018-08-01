import React from 'react';

import './Home.css';
import radioAstro from '../../assets/images/radio-astro.png';
// import saucer from '../../assets/images/saucer.png';

class Home extends React.Component {
  render () {
    return (
      <div className = "Home">
        <h2 className="title">Planet Jam</h2>
        <img src={radioAstro} alt=""/>
      </div>
    );
  }
}

export default Home;
