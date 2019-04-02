import React, {Component } from 'react';


class button extends Component{
    render(){
       return(
            <button 
            className = "button"
             onClick={this.props.clicked}>
             {this.props.value}
             </button>
        );
    }
}
export default button;
