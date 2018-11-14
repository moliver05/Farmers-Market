import React from "react";
import TicketList from "./TicketList"
import Ticket from "./Ticket"
import TopNav from "./Topnav"
//import PropTypes from "prop-types";



function App(){
  var styles = {
    width: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
  }
  return (
    <div style={styles}>
    <TopNav />
    <div style={styles}>
    <br/>
      <TicketList />
      </div>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
