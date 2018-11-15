import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  var routeGuide = {
    margin: "20px"
  }

  return (
    <div style={routeGuide}>
      <h3>Guide</h3>
     <Link to="/" className="btn btn-danger">Home</Link>
     <Link to="/newgoods" className="btn btn-success">Add New Goods</Link> 
     <Link to="/schedule" className="btn btn-warning">Schedule</Link>
    </div>
  );
}

export default Header;