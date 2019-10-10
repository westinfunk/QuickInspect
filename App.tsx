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


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Account />
      </SafeAreaView>
    </>
  );
};

export default App;
