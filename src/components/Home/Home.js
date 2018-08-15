import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import login from '../../assets/images/login-btn.png';


class Home extends React.Component {
  render () {
    return (
      <div className = "Home">
      <div>
      <h2 className="title col-xs-12">Planet Jam</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/x33shlWoxzI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <div className="getIn col-md-4-offset-8">
      <Link to="/login"><img className="clickLog" src={login} alt=""/></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
