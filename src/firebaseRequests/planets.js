import axios from 'axios';
import constants from '../constants';

const getPlanets = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/planets.json`)
      .then(res => {
        const planets = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            planets.push(res.data[fbKey]);
          });
        }
        resolve(planets);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getPlanets};
