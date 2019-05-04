import React, { Component } from 'react';
import Input from './input'

class inputs extends Component {
    render() {
        return this.props.inputs.map((input) => {
            return (
                <div>
                    <Input
                        changed={event => this.props.changed(event, input.id)}
                        value={input.value}
                        key={input.id}
                        click={() => this.props.click(input.id)}
                    />
                    <br />
                </div>
            )
        })
    }
}
export default inputs;