import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({
    Login: LoginScreen
}, {
    initialRouteName: "Login"
})

export default AuthStack;