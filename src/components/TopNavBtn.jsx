import React from "react";

function TopNavBtn(props){
    var styles = {
        border: "2px solid lightgrey",
        borderRadius: "0px",
        height: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "13px",
        backgroundColor: "white",
    }
    return (
      <button style={styles}>{props.btnName}</button>
    );
  }
  
  export default TopNavBtn;
  