import React from "react";


function TopNav(){
    var styles = {
        width: "1100px",
        fontSize: "25px", 
        justifyContent: "space-between",
        border: "10px solid gold",
        opacity: ".5",
        paddingBottom: "15px",
        marginTop: "35px"
    }
    var headStyles = {
        textAlign: "center",
        color: "Green"
    }
    return (
      <div style={styles}>
          <div style={headStyles}>
           What's Goods Market
          </div>
      </div>
  
    );
  }
  
  export default TopNav;