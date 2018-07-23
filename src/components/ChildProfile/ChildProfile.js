import React from 'react';
import childrenRequests from '../../firebaseRequests/children';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import './ChildProfile.css';

class ChildProfile extends React.Component {
  state = {
    children: [],
  }

  componentDidMount() {
    childrenRequests
      .getChildren()
      .then((children) => {
        this.setState({ children: children });
      })
      .catch((err) => {
        console.error('error getting children', err);
      });
  }

  render() {
    // const details = this.props
    const childComponents = this.state.children.map((children) => {
      console.error('component', children);
      const imagePath = require(`${children.avatarUrl}`);
      // const planetSounds = require(`${planet.soundUrl}.mp3`);
      return (
        <div className="planet-container col-xs-4">
          <h2 className="planetName">{children.name}</h2>
          <a href="">
            <img className="child-pic" src={imagePath} alt={children.avatarUrl}/>
          </a>
        <button className="btn btn-success onClick">Save</button>
        </div>
      );
    });
    return (
      <div className="AllChildren col-xs-12">
        <h1>All Planets</h1>
        <ul className="children">
          {childComponents}
        </ul>
      </div>
    );
  }
}

export default ChildProfile;