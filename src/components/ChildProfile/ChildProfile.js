import React from 'react';
import { Link } from 'react-router-dom';

import deleteThis from '../../assets/images/delete.png';

import './ChildProfile.css';

class ChildProfile extends React.Component {

  childInputNameChangeEvent = (e, id) => {
    e.preventDefault();
    this.props.onChange(e, id);
  }

  render() {
    const details = this.props.details;
    const imagePath = require(`../../assets/avatar/${details.avatarUrl}`);
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
        <Link to=
          {`/child/${this.props.id}/savedPlanets`}><img className="child-dashpic" src={imagePath} alt={details.avatarUrl} /></Link>
        <div className="child-edit">
        <input type="text" placeholder="Type Name Here" onChange={(event) => this.childInputNameChangeEvent(event, details.id)}/>
        <button className="btn btn-success" id={details.id} onClick={this.props.updateCurrentChild}>Change Name</button>
        </div>
        <img src={deleteThis} alt={details.name} id={details.id} onClick={this.props.deleteChild}/>
      </div>
      </li>
    );
  };
}

export default ChildProfile;
