import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import splashScreen from '../screen/splashScreen'
import loginPage from '../screen/login'
import ScreenNavPage from './ScreenNav'
// import RegisterPage from '../screen/Register'


const SwitchNav = createSwitchNavigator({

    splashScreen : splashScreen,
    Login : loginPage,
    ScreenNav: ScreenNavPage,
    // Register: RegisterPage,
}
)

export default createAppContainer(SwitchNav);