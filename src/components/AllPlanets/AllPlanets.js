import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import PlanetKeys from '../../components/PlanetKeys/PlanetKeys';
// import Saved from '../../'
// import firebase from 'firebase';
import planetRequest from '../../firebaseRequests/planets';

// import auth from '../../firebaseRequests/auth';

import './AllPlanets.css';


class AllPlanets extends React.Component {
  state = {
    planets: [],
    myplanets: {},
  }

  addToMyPlanets = (key) => {
    const newFav = {...this.state.myplanets};
    newFav[key] = newFav[key] + 1 || 1;
    this.setState({ myplanets: newFav });
  }

  // saveNewOrder = () => {
  //   console.error('planet to save', this.state.myplanets);
  // }


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
        <button><Link to={`/child/childId/savedPlanets`}>See All Saved Planets</Link></button>
      </div>
    );
  }
}

export default AllPlanets;