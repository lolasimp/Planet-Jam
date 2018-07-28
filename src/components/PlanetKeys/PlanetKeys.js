import React from 'react';
// import { Link } from 'react-router-dom';
// import childRequest from '../../firebaseRequests/children';
// import firebase from 'firebase';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import authRequest from '../../firebaseRequests/auth';
import planetRequests from '../../firebaseRequests/planets'


import './PlanetKeys.css';

class PlanetKeys extends React.Component {
  saveOrder= () => {
    this.props.saveNewOrder();
  }


  saveNewPlanetEvent = () => {
        const newPlanet = {...this.state.newPlanet};
        newPlanet.childId = authRequest.getUid();
        planetRequests.postChild( newPlanet)
        .then(()=> {
          this.props.history.push("/child/childId/savedPlanets/:id");
        })
        .catch ((err) =>{
          console.error('no new planet', err);
        })
      }

  render() {
    const details = this.props.details;
    const imagePath = details.imageUrl;
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
       <img src={imagePath} alt=""/>
      </div>
      </li>
    );
  };
}

export default PlanetKeys;
