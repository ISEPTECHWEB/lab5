import React from 'react';
import PropTypes from 'prop-types';
import '../css/Choices.css'

import Choice from "./Choice";

const displayChoices = (props) => props.choices.map (t=> <Choice key={t.id} {...t} updateChoices={props.updateChoices}/>);

const Choices = (props) => <ul className="choicesList">
{displayChoices({...props})}
</ul>


Choices.propTypes = {
    choices: PropTypes.array.isRequired
}

export default Choices;