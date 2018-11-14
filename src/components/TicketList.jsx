import React from 'react';
import TicketList from './TicketList';
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <div>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
    <hr/>
  </div>
  );
}

TicketList.propTypes = {
    names: PropTypes.string,
    location: PropTypes.string,
    issue: PropTypes.string
};

export default TicketList;