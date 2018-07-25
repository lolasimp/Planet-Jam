import React from 'react';
// import childrenRequests from '../../firebaseRequests/children';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import './ChildProfile.css';

class ChildProfile extends React.Component {
  render() {
    const details = this.props.details;
    const imagePath = details.avatarUrl;
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
          <img className="child-pic" src={imagePath} alt={details.avatarUrl.jpeg} />
        <button className="btn btn-success onClick">Save</button>
        <button className="btn btn-danger onCLick">Delete</button>
      </div>
      </li>
    );
  };
}


export default ChildProfile;