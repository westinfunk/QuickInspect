import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import Account from './screens/AccountScreen';
import { Text } from 'react-native-elements';

import AuthNavigator from './navigation/AuthNavigator';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AuthNavigator />
      </SafeAreaView>
    </>
  );
};

export default App;
