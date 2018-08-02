import React from 'react';
import { Link } from 'react-router-dom';

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
          {`/child/${this.props.id}/savedPlanets`}><img className="child-pic" src={imagePath} alt={details.avatarUrl} /></Link>
        <div className="child-edit">
        <input type="text" placeholder="Edit" onChange={(event) => this.childInputNameChangeEvent(event, details.id)}/>
        <button className="btn btn-success" id={details.id} onClick={this.props.updateCurrentChild}>Update</button>
        </div>
        <button className="btn btn-danger" id={details.id} onClick={this.props.deleteChild}>Delete</button>

      </div>
      </li>
    );
  };
}

export default ChildProfile;
