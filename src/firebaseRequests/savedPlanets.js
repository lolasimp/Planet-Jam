import axios from 'axios';
import constants from '../constants';

const getSavedPlanets = (ParentUid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/savedPlanets.json?orderBy="uid"&equalTo="${ParentUid}"`)
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

const postSavedPlanets = (savedPlanet) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/savedPlanets.json`, savedPlanet)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {getSavedPlanets, postSavedPlanets};