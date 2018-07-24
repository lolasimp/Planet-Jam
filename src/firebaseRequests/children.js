import axios from 'axios';
import constants from '../constants';

const getChildren = (parentUid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/children.json?orderBy="parentUid"&equalTo="${parentUid}"`)
      .then(res => {
        const children = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            children.push(res.data[fbKey]);
          });
        }
        resolve(children);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postChild = (newChild) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/children.json`, newChild)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getChildren, postChild};