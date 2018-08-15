import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebaseRequests/auth';
import home from '../../assets/images/homeLabel.png';

import './Navbar.css';

class Navbar extends React.Component {
  render () {
    const { authed, getOut } = this.props;
    const logoutClickEvent = () => {
      auth.logoutUser();
      getOut();
    };

    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
              <img className="brand-image" src={home} alt="Planet Jam" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {
                authed ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to="/dashboard"> Dashboard</Link>
                    </li>
                    <li className="navbar-form">
                      <button
                        onClick={logoutClickEvent}
                        className="btn btn-danger">
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      {/* <Link to="/login"> Login</Link> */}
                    </li>
                  </ul>
                )
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
