import axios from 'axios';
import constants from '../constants';
// import firebase from 'firebase';

const getSavedPlanets = (childId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/savedPlanets.json?orderBy="childId"&equalTo="${childId}"`)
      .then(res => {
        resolve(res.data);
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