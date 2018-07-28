import axios from 'axios';
import constants from '../constants';
import firebase from 'firebase';

const getChildren = () => {
  const parentUid = firebase.auth().currentUser.uid;
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

const updateChild = (childId, updatedChild) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/children/${childId}.json`, updatedChild)
      .then(res => {
       resolve(res);
      })
      .catch((error)=> {
        reject(error.message);
      });
  });
};

const deleteRequest = (childrenId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/children/${childrenId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};



// const getSingleChildPlanets = (childId) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`${constants.firebaseConfig.databaseURL}/children.json?orderBy="parentUid"&equalTo="${parentUid}"`)
//       .then(res => {

//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// };

export default { getChildren, postChild, deleteRequest, updateChild};