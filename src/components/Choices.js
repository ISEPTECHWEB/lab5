import React from 'react';
import PropTypes from 'prop-types';
import '../css/Choices.css'

import Choice from "./Choice";

const displayChoices = (choices) => choices.map (t=> <Choice key={t.id} {...t}/>);

const Choices = (props) => <ul className="choicesList">
{displayChoices(props.choices)}
</ul>


Choices.propTypes = {
    choices: PropTypes.array.isRequired
}

export default Choices;