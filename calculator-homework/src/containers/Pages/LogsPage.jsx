import React, { Component } from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems';
import ordersRef from '../../config/firebase';
import '../App.css';
import Inputs from '../../components/inputs/inputs';
import Button from '../../components/buttons/button';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux'
import Log from '../../components/Logs/Log';
class LogsPage extends Component {

    componentDidMount() {
        this.props.onFetchLogs(this.props.token)
    }

    render() {

        var logs = this.props.logs;
        var err = "";
        const items = [];
        for (let i = 0; i < logs.length; i++) {
            items.push(<Log time={logs[i].time} value={logs[i].value} />)
        }
        if (items.length === 0) {
            err = "Please Log In"
        }


        return (
            <div className='App'>
                <nav><NavigationItems /></nav>
                {err}
                {items}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        logs: state.logs.logs,
        loading: state.logs.loading,
        token: state.auth.token
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onFetchLogs: (token) => {
            return dispatch(actions.fetchLogs(token));
        }
        // onLogout: ()=> {return dispatch(actions.lo)}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogsPage)
