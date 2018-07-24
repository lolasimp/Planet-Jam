import React from 'react';
import {Link} from 'react-router-dom';

import './Dashboard.css';


class Dashboard extends React.Component {
    render() {
      return (
       <div>
         <button><Link to="/new/child">Create New Child Profile</Link></button>
         <div>
           {/* {newChild.this.props} */}
         </div>
       </div>
      );
    }
  }

export default Dashboard;
