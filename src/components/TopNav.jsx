import React from "react";
import TopNavBtn from "./TopNavBtn";
import TopNavSearch from  "./TopNavSearch";

function TopNav(){
  var styles = {
      width: "1100px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "50px",
      borderBottom: "2px solid lightgrey",
      paddingBottom: "15px"
  }
  var buttonsStyles = {
      display: "inline-block",
  }
  return (
    <div style={styles}>
        <div style={buttonsStyles}>
            <TopNavBtn btnName="Home" />
            <TopNavBtn btnName="Notifications" />
            <TopNavBtn btnName="Messages" />
        </div>
        <TopNavSearch />
    </div>

  );
}

export default TopNav;