import React from 'react';

import './SavedPlanets.css';

class SavedPlanets extends React.Component {

  savePlanet = () => {
    this.props.saveNewPlanet();
  }

  renderPlanet = (key) => {
    const planet = this.props.planets.find(x => x.id === key);
    const xClickFunction = () => {
      this.props.removeFromPlanets(key);
    };
    return (
      <li
        key={key}
        className="text-left"
      >
        <div className="planetName">{planet.name}</div>
        <div className="col-xs-2">
          <button className="btn btn-default" onClick={xClickFunction}>&times;</button>
        </div>
      </li>
    );
  }
  render() {
    const planetId = Object.keys(this.props.order);
    const planetsIsHere = planetId.length > 0;

    return (
      <div className="SavedPlanets">
        <h2>SavedPlanets</h2>
        <ul>
          {planetId.map(this.renderPlanet)}
          {
            planetsIsHere ? (
              <button className="btn btn-default" onClick={this.saveOrder}>Save Planet</button>
            ) : (
                <div>Add inventory to your orders</div>
              )
          }
        </ul>
      </div>
    );
  }
}

export default SavedPlanets;
