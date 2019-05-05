import React, { Component } from 'react';

class Log extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.time}</h1>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default Log;