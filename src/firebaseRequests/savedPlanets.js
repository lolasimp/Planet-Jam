import axios from 'axios';
import constants from '../constants';

const getSavedPlanets = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/savedPlanets.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const planet = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            planet.push(res.data[fbKey]);
          });
        }
        resolve(planet);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getSavedPlanets};