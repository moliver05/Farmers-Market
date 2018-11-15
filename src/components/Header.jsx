import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h3>Guide</h3>
      <Link to="/">Home</Link> | <Link to="/newgoods">Add New Goods</Link> | <Link to="/schedule">Schedule</Link>
    </div>
  );
}

export default Header;