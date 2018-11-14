import React from "react";
import PropTypes from "prop-types";


function Goods(props) {

  return (
    <div>
      <div className></div>
      <div className="panel panel-default">
        <div className="panel-heading">
        <hr/>
        <br/>
          <h3 className="panel-title">{props.season}</h3>
        </div>
        <br/>
        <div className="panel body">
          <ul>
            <li>{props.name}</li>
            <li>{props.price}</li>
            <li>{props.location}</li>
            <li>{props.kind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Goods.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired
};

export default Goods;