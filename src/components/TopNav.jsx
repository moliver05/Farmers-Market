import React from "react";


function TopNav(){
    var styles = {
        width: "1100px",
        fontSize: "25px", 
        justifyContent: "space-between",
        border: "10px solid black",
        opacity: ".5",
        paddingBottom: "15px"
    }
    var headStyles = {
        textAlign: "center",
        color: "Teal"
    }
    return (
      <div style={styles}>
          <div style={headStyles}>
            Exercise
          </div>
      </div>
  
    );
  }
  
  export default TopNav;