import React from 'react';
import PropTypes from 'prop-types';
import "../css/Choice.css";

const Choice = (props) => (
    <li>
        {props.name}
        <input type="number" defaultValue={props.vote} min="0" onKeyPress={onKeyPress}/>  
        {props.percent}%      
    </li>
);

const onKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (/\+|-/.test(keyValue))
      event.preventDefault();
};


Choice.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    vote: PropTypes.number,
    percent: PropTypes.number
}

export default Choice;