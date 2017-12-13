import React from 'react';

class AddChoice extends React.Component {

    constructor() {
        super();
        this.state = {
            newChoice: ''
        };
    }

    render() {
        return (
            <div>
                Add Choice: <input type="text" placeholder="Write your choice..." value={this.state.newChoice} onChange={this.changeName} onKeyPress={this.handleKeyPress} /> 
                <button onClick={this.addChoice}>Add</button>           
            </div>
        );
    }

    changeName = (e) => {
        this.setState({newChoice: e.target.value});
    }

    addChoice = () => {
        this.props.addChoice(this.state.newChoice)

        this.setState({newChoice:''});
    }

    handleKeyPress = (event) => {
        if(event.charCode === 13){
            this.addChoice();
        }
    }
}

export default AddChoice;