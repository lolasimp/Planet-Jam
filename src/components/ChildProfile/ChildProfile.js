import React from 'react';
import { Link } from 'react-router-dom';
// import childRequest from '../../firebaseRequests/children';
// import firebase from 'firebase';
// import myPlanet from '../../firebaseRequests/savedPlanets';


import './ChildProfile.css';

class ChildProfile extends React.Component {


  childInputNameChangeEvent = (e, id) => {
    e.preventDefault();
    this.props.onChange(e, id);
  }

  render() {
    const details = this.props.details;
    const imagePath = details.imageUrl;
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
        <div className="child-edit">
        <input type="text" placeholder="Edit" onChange={(event) => this.childInputNameChangeEvent(event, details.id)}/>
        <button className="btn btn-success" id={details.id} onClick={this.props.updateCurrentChild}>Update</button>
        </div>
          <Link to=
          {`/child/childId/savedPlanets/${this.props.id}`}><img className="child-pic" src={imagePath} alt={details.avatarUrl} /></Link>
        <button className="btn btn-danger" id={details.id} onClick={this.props.deleteChild}>Delete</button>

      </div>
      </li>
    );
  };
}


export default ChildProfile;