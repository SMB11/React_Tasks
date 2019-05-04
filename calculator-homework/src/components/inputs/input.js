import React, { Component } from 'react';

import '../../containers/App.css'

class input extends Component {
    render() {
        return (
            <input type="text"
                className='inputs'
                onChange={this.props.changed}
                value={this.props.value}
                onClick={this.props.click}
                type={this.props.type}
                placeholder={this.props.placeholder} />
        )
    }
}

export default input;