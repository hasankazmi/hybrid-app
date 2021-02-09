/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavStack from './Screens/RootNavStack';



class App extends React.Component{
  
  render(){
    return(
      <SafeAreaProvider>
        <RootNavStack />
      </SafeAreaProvider>
      
    );
  }
  
}


export default App;
