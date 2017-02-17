import React, { Component } from 'react';
import RootContainer from './RootContainer';
import SettingsContainer from './SettingsContainer';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator(
  {
    Home: { screen: RootContainer },
    Settings: { screen: SettingsContainer }
  },
  {
    navigationOptions: {
      header: {
        visible: false
      }
    }
  }
);

export default App
