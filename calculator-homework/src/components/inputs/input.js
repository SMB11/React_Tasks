import React,{Component} from 'react';

class input extends Component{
    render(){
        return(
            <input type="text"
             onChange={this.props.changed} 
             value={this.props.value}
             onClick={this.props.click}/>
        )
    }
}

export default input;