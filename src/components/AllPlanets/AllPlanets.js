import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import PlanetKeys from '../../components/PlanetKeys/PlanetKeys';
import savedPlanetRequest from '../../firebaseRequests/savedPlanets';
import planetRequest from '../../firebaseRequests/planets';

import './AllPlanets.css';

class AllPlanets extends React.Component {
  state = {
    planets: [],
    myplanet: {},
  }

  addToMyPlanets = (planetDetails) => {
    const newFav = {...this.state.myplanet};
    newFav.childId= this.props.match.params.childId;
    newFav.planetId= planetDetails.id;
    this.setState({ myplanet: newFav });
    savedPlanetRequest
    .postSavedPlanets(newFav)
    .then(() => {
    })
    .catch((err) => {
      console.error('not saving', err);
    })
  }

  componentDidMount() {
    planetRequest
      .getPlanets()
      .then((planets) => {
        this.setState({ planets });
      })
      .catch((err) => {
        console.error('error with getting my planets', err);
      });
  }

  render() {
    const childId = this.props.match.params.childId;
    const allPlanetComponents = this.state.planets.map((planet) => {
      return (
        <Fragment key={planet.id}>

        <PlanetKeys
          id={planet.id}
          details={planet}
          addToMyPlanets={this.addToMyPlanets}
        />
        </Fragment>
      );
    });
    return (
      <div>
        <ul>
          {allPlanetComponents}
        </ul>
        <button><Link to={`/child/${childId}/savedPlanets`}>See All Saved Planets</Link></button>
      </div>
    );
  }
}

export default AllPlanets;
