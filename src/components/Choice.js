import React from 'react';
import PropTypes from 'prop-types';
import "../css/Choice.css";


class Choice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.vote
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const newText = parseInt(e.target.value, 10)
        this.props.updateChoices(this.props.id, newText)
        this.setState({ text: newText })
        
    }

    onKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (/\+|-/.test(keyValue))
          event.preventDefault();
    };

    render() {
        return <li>
            {this.props.name}
            <input type="number" value={(this.state.text)} min="0" onKeyPress={this.onKeyPress}
                onChange={this.onChange}/>
            {this.props.pourcent}%
    </li>  
    }

    
}

Choice.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    vote: PropTypes.number,
    pourcent: PropTypes.number
}

export default Choice;