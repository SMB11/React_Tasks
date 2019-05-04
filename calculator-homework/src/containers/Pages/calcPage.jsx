import React, { Component } from 'react';
import '../App.css';
import Inputs from '../../components/inputs/inputs';
import Button from '../../components/buttons/button';
import calcRef from '../../config/firebase';
import { connect } from 'react-redux'
import NavigationItems from '../../components/Navigation/NavigationItems';
class CalcPage extends Component {
    state = {
        inputs: [
            { id: "0", value: 0 },     //Store in state inputs and result
            { id: "1", value: 0 }
        ],
        result: 0,

    };


    inputChangeHandler = (event, id) => {

        const inputIndex = this.state.inputs.findIndex(p => {
            return p.id === id;
        });
        const input = {
            ...this.state.inputs[inputIndex]
        };
        //find which input changed and set state
        input.value = event.target.value;

        const inputs = [...this.state.inputs];
        inputs[inputIndex] = input;

        this.setState({ inputs: inputs });

    }
    inputClickHandler = (id) => {
        const inputIndex = this.state.inputs.findIndex(p => {
            return p.id === id;
        });
        const input = {
            ...this.state.inputs[inputIndex]
        };
        //Clear inputs when clicked
        input.value = "";

        const inputs = [...this.state.inputs];
        inputs[inputIndex] = input;

        this.setState({ inputs: inputs });
    }
    //Addiion
    addButtonClicked = (value1, value2) => {
        value1 = parseFloat(this.state.inputs[0].value);
        value2 = parseFloat(this.state.inputs[1].value);
        let res = value1 + value2;
        this.setState({ result: res });

        var d = new Date();
        var localTime = d.toLocaleTimeString(); // Get time

        let data = {
            time: localTime,
            value: value1 + " + " + value2
        }

        let id = Math.random().toString(36).substr(2, 9);  ///Generate almost unique ID

        calcRef.child(id).set(data);

    }


    subtractButtonClicked = (value1, value2) => {
        value1 = parseFloat(this.state.inputs[0].value);
        value2 = parseFloat(this.state.inputs[1].value);
        let res = value1 - value2;
        this.setState({ result: res });

        var d = new Date();
        var localTime = d.toLocaleTimeString(); // Get time

        let data = {
            time: localTime,
            value: value1 + " - " + value2
        }

        let id = Math.random().toString(36).substr(2, 9);  ///Generate almost unique ID

        calcRef.child(id).set(data);


    }


    multiplyButtonClicked = (value1, value2) => {
        value1 = parseFloat(this.state.inputs[0].value);
        value2 = parseFloat(this.state.inputs[1].value);
        let res = value1 * value2;
        this.setState({ result: res });

        var d = new Date();
        var localTime = d.toLocaleTimeString(); // Get time

        let data = {
            time: localTime,
            value: value1 + " * " + value2
        }

        let id = Math.random().toString(36).substr(2, 9);  ///Generate almost unique ID

        calcRef.child(id).set(data);

    }


    divideButtonClicked = (value1, value2) => {
        value1 = parseFloat(this.state.inputs[0].value);
        value2 = parseFloat(this.state.inputs[1].value);
        let res = value1 / value2;
        this.setState({ result: res });


        var d = new Date();
        var localTime = d.toLocaleTimeString();  // Get time

        let data = {
            time: localTime,
            value: value1 + " / " + value2
        }

        let id = Math.random().toString(36).substr(2, 9);  ///Generate almost unique ID

        calcRef.child(id).set(data);

    }
    render() {
        let inputs = <Inputs
            className="inputs"
            inputs={this.state.inputs}
            changed={this.inputChangeHandler}
            click={this.inputClickHandler} />;
        return (
            <div className="App">
                <nav><NavigationItems /></nav>
                <h1 className='label'>Homework 1,<br />
                    Homework 2
      </h1>

                <p>Calculator
        <br />
                    With Server logs
      </p>
                {inputs}
                <div className="operations">
                    <Button clicked={this.addButtonClicked} value="+" />
                    <Button clicked={this.subtractButtonClicked} value="-" />
                    <Button clicked={this.multiplyButtonClicked} value="*" />
                    <Button clicked={this.divideButtonClicked} value="/" />
                </div>
                <p className="result">Result</p>
                <p>{this.state.result}</p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        storedResults: state.results
    };
};

export default connect(mapStateToProps)(CalcPage);