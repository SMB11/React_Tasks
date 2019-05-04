import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className='NavigationItems'>

        <NavigationItem link="/" exact>Calculator</NavigationItem>
        <NavigationItem link="/auth">Auth</NavigationItem>
    </ul>
);

export default navigationItems;