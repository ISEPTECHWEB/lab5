import React from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';

import AddChoice from "./AddChoice";
import Choices from "./Choices";
import  defaultChoices from "./defaultChoices";
import { choiceHelper } from '../helpers/choice-helper';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      choices: defaultChoices
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Survey</h1>
        </header>
        <div className="Question">QUESTION ?</div>
        
        <Choices choices={this.state.choices}/>
        <AddChoice addChoice={this.addChoiceToState}/>
      </div>
    );
  }

  addChoiceToState = (name) => {
    const newChoicesList = choiceHelper.addChoice(this.state.choices, name)

    this.setState({choices:newChoicesList});
  };
}
export default App;
