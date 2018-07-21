import React from 'react';
// import auth from '../../firebaseRequests/auth';
import planetRequests from '../../firebaseRequests/planets';
// import myPlanet from '../../firebaseRequests/savedPlanets';

import './AllPlanets.css';

class AllPlanets extends React.Component {
  state = {
    savedPlanets: [],
    planets: {},
  }

//   saveToMyPlanets= (planetDetails) => {
//   const newPlanet = { ...this.state.planets }
//   newPlanet.name = planetDetails.name;
//   newPlanet.imgUrl = planetDetails.imgUrl;
//   newPlanet.soundUrl = planetDetails.soundUrl;
//   newPlanet.childId = planetDetails.childId;
//   newPlanet.ParentUid = auth.getUid();
//   myPlanet
//     .postSavedPlanets(newPlanet)
//     .then(() => {

//     })
//     .catch((err) => {
//       console.error('error in planets', err);
//     });
// }
componentDidMount() {
  planetRequests
    .getPlanets()
    .then((planets) => {
      this.setState({ planets });
    })
    .catch((err) => {
      console.error('error getting planets', err);
    });
}
render() {
  // const details = this.props
  const planetComponents = this.state.planets.map((planet) => {
    // const imagePath = require(`${planet.imgUrl}.png`);
    return (
      <AllPlanets
        key={planet.id}
        details={planet}
        // saveToMyPlanets={this.saveToMyPlanets}
      />
    );
  });
  return (
    <div className="AllPlanets col-xs-12">
      <h1>All Planets</h1>
      <ul className="planets">
        {planetComponents}
      </ul>
    </div>
  );
}
}

export default AllPlanets;