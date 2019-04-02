import React, { Component } from 'react';
import './App.css';
import Inputs from '../components/inputs/inputs';
import Button from '../components/buttons/button';

class App extends Component {
  state= {
     inputs:[
       {id:"0", value:0},
       {id:"1", value:0}
     ],
     result:0
  };
  inputChangeHandler =(event,id) =>{

    const inputIndex = this.state.inputs.findIndex(p=>{
      return p.id ===id;
    });
const input ={
  ...this.state.inputs[inputIndex]
};

input.value  = event.target.value;

const inputs = [...this.state.inputs];
inputs[inputIndex] = input;

this.setState({inputs: inputs});

  }
  inputClickHandler =(id)=>{
    const inputIndex = this.state.inputs.findIndex(p=>{
      return p.id ===id;
    });
const input ={
  ...this.state.inputs[inputIndex]
};

input.value  = "";

const inputs = [...this.state.inputs];
inputs[inputIndex] = input;

this.setState({inputs: inputs});
  }

  addButtonClicked = (value1,value2)=>{
    value1 = parseFloat(this.state.inputs[0].value);
    value2 = parseFloat(this.state.inputs[1].value);
     let res = value1 + value2;
    this.setState({result:res});

  }
  subtractButtonClicked = (value1,value2)=>{
    value1 = parseFloat(this.state.inputs[0].value);
    value2 = parseFloat(this.state.inputs[1].value);
     let res = value1 - value2;
    this.setState({result:res});

  }
  multiplyButtonClicked = (value1,value2)=>{
    value1 = parseFloat(this.state.inputs[0].value);
    value2 = parseFloat(this.state.inputs[1].value);
     let res = value1 * value2;
    this.setState({result:res});

  }
  divideButtonClicked = (value1,value2)=>{
    value1 = parseFloat(this.state.inputs[0].value);
    value2 = parseFloat(this.state.inputs[1].value);
     let res = value1 / value2;
    this.setState({result:res});

  }
  render() {
    let inputs = <Inputs
                  inputs = {this.state.inputs}
                  changed = {this.inputChangeHandler}
                  click = {this.inputClickHandler}/>;
    return (
      <div className="App">
      <h1>Homework 1</h1>
      <p>Calculator</p>
      {inputs}
      <Button clicked ={this.addButtonClicked} value = "+"/>
      <Button clicked ={this.subtractButtonClicked} value = "-"/>
      <Button clicked ={this.multiplyButtonClicked} value = "*"/>
      <Button clicked ={this.divideButtonClicked} value = "/"/>
      <p>Result</p>
      <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
