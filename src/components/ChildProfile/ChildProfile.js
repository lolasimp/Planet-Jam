import React from 'react';
// import { Link } from 'react-router-dom';
// import childRequest from '../../firebaseRequests/children';
// import firebase from 'firebase';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import './ChildProfile.css';

class ChildProfile extends React.Component {

  // deleteChildEvent = (id) =>{
  //   this.props.deleteChild(id);
  // }

  childInputNameChangeEvent = (e, id) => {
    this.props.onChange(e, id);
  }
  // updateCurrentChildEvent = (details) => {
  //   this.props.onSave(details);
  // }

  render() {
    const details = this.props.details;
    const imagePath = details.avatarUrl;
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
        <div className="child-edit">
        <input type="text" placeholder="Edit" onChange={(event) => this.childInputNameChangeEvent(event, details.id)}/>
        <button className="btn btn-success" id={details.id} onClick={this.props.updateCurrentChild}>Update</button>
        </div>
          <img className="child-pic" src={imagePath} alt={details.avatarUrl} />
        <button className="btn btn-danger" id={details.id} onClick={this.props.deleteChild}>Delete</button>

      </div>
      </li>
    );
  };
}


export default ChildProfile;