import React from "react";

function TopNavSearch() {
    var inputStyles = {
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        border: "2px solid #38A1F3",
        marginRight: "100px",
        width: "150px",
        fontSize: "15px",
        padding: "8px"
    }
    var inputStyles2 = { 
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        border: "2px solid #38A1F3",
        marginRight: "20px",
        width: "80px",
        fontSize: "15px",
        padding: "8px"
    }
    return (
        <div>
            <input style={inputStyles}
                type="text" placeholder="Search"></input>
            <input style={inputStyles2} type="button" value="Tweet"></input>
        </div>
    );
}

export default TopNavSearch;