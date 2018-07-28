// import React from 'react';
// import planetRequests from '../../firebaseRequests/planets';
// import authRequest from '../../firebaseRequests/auth';
// // import myPlanet from '../../firebaseRequests/savedPlanets';

// import './AllPlanets.css';

// class AllPlanets extends React.Component {
//   state = {
//     planets: [],
//   }

//   addClickEvent = () => {
//     this.props.addToOrder(this.props.details.id);
//   };

//   saveNewPlanetEvent = () => {
//     const newPlanet = {...this.state.newPlanet};
//     newPlanet.childId = authRequest.getUid();
//     planetRequests.postChild( newPlanet)
//     .then(()=> {
//       this.props.history.push("/child/childId/savedPlanets/:id");
//     })
//     .catch ((err) =>{
//       console.error('no new planet', err);
//     })
//   }

//   componentDidMount() {
//     planetRequests
//       .getPlanets()
//       .then((planets) => {
//         this.setState({ planets: planets });
//       })
//       .catch((err) => {
//         console.error('error getting planets', err);
//       });
//   }

//   render() {
//     // const details = this.props
//     const planetComponents = this.state.planets.map((planet) => {
//       const imagePath = require(`${planet.imgUrl}.png`);
//       // const planetSounds = require(`${planet.soundUrl}.mp3`);
//       return (
//         <div className="planet-container col-xs-4">
//           <h2 className="planetName">{planet.name}</h2>
//           <a href="">
//             <img className="planet-pic" src={imagePath} alt={planet.name} onClick={this.saveNewPlanetEvent}/>
//           </a>
//         {/* <button className="btn btn-success">Save</button> */}
//         </div>
//       );
//     });
//     return (
//       <div className="AllPlanets col-xs-12">
//         <h1>All Planets</h1>
//         <ul className="planets">
//           {planetComponents}
//         </ul>
//       </div>
//     );
//   }
// }

// export default AllPlanets;



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
    // const id = firebase.auth().currentUser.uid;
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
          // saveNewOrder={this.saveNewOrder}
        />
        </Fragment>
      );
    });
    return (
      <div>
        <ul>
          {allPlanetComponents}
        </ul>
        <button><Link to="/child/childId/savedPlanets/:id">See All Saved Planets</Link></button>
      </div>
    );
  }
}

export default AllPlanets;