import React from 'react';
// import { Link } from 'react-router-dom';
// import childRequest from '../../firebaseRequests/children';
// import firebase from 'firebase';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import './ChildProfile.css';

class ChildProfile extends React.Component {

  deleteChildEvent = (id) =>{
    this.props.onClick(id);
  }

  render() {
    const details = this.props.details;
    const imagePath = details.avatarUrl;
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
          <img className="child-pic" src={imagePath} alt={details.avatarUrl.jpeg} />
        <button className="btn btn-danger" onClick={() => this.deleteChildEvent(details.id)}>Delete</button>
      </div>
      </li>
    );
  };
}


export default ChildProfile;