import React from 'react';

import './PlanetKeys.css';

class PlanetKeys extends React.Component {
  saveOrder= () => {
    this.props.saveNewOrder();
  }


  saveNewPlanetEvent = () => {
    this.props.addToMyPlanets(this.props.details);
  }

  render() {
    const {details} = this.props;
    const imagePath = require(`./images/${details.imgUrl}`);
    return (
      <li>
      <div className="planet-container col-xs-4">
        <h2 className="planetName">{details.name}</h2>
       <img className="planet-pic"src={imagePath} alt=""/>
       <button className="btn btn-success" onClick={this.saveNewPlanetEvent}>Save My Planet</button>
      </div>
      </li>
    );
  };
}

export default PlanetKeys;
