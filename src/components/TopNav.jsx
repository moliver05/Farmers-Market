import React from "react";


function TopNav(){
    var styles = {
        width: "1100px",
        fontSize: "25px", 
        justifyContent: "space-between",
        border: "10px solid gold",
        opacity: ".5",
        paddingBottom: "15px",
        backgroundColor: "skyblue",
        marginTop: "10px"
    }
    var headStyles = {
        textAlign: "center",
        color: "red"
    }
    return (
      <div style={styles}>
          <div style={headStyles}>
          $$ DA PLUG $$
          </div>
      </div>
  
    );
  }
  
  export default TopNav;