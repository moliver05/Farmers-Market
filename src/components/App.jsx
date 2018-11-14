import React from "react";
//import PropTypes from "prop-types";
import TopNav from "./TopNav";


function App(){
  var styles = {
    width: "1100px",
    marginRight: "auto",
    marginLeft: "auto",
  }
  var layout = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
  return (
    <div style={styles}>
      <TopNav />
      <div style={layout}>
       
      </div>

      social-media-clone
    </div>
  );
}

//App.propTypes = {
//};

export default App;
