import React, { Component } from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';

class navigationItems extends Component {

    render() {
        return (
            <ul className='NavigationItems'>

                <NavigationItem link="/" exact>Calculator</NavigationItem>

                {!this.props.isAuth ? <NavigationItem link="/auth">Auth</NavigationItem>
                    : <NavigationItem link="/logout">Logout</NavigationItem>}
                <NavigationItem link="/logs">Logs</NavigationItem>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(navigationItems);