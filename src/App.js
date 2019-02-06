import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {


  state = {
    userInput: ""
  }

  inputHandler = (event) => {
    const inputChar = event.target.value;
    this.setState({
      userInput: inputChar
    });
  }

  deleteCharHandler = (index)=>{
   
    // Turn String object into array where each character becomes an element 
    let inputArray=this.state.userInput.split('');
    
    // Remove one(1) element from the array in the position index
    inputArray.splice(index,1);

    // Turn array into String object
    inputArray=inputArray.join('');

    this.setState({
      userInput: inputArray
    });

    console.log(inputArray);
  }

  render() {

    const charArray = this.state.userInput.split('');
    let charList = charArray.map((val, index) => {
      return <Char
        letter={val}
        key={index}
        clicked={()=>this.deleteCharHandler(index)}
      />;
    });
    return (
      <div className="App">
        <input
          onChange={this.inputHandler}
          value={this.state.userInput}
        />
        <Validation
          length={this.state.userInput.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
