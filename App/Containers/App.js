import React, { Component } from 'react';
import RootContainer from './RootContainer';
import SettingsContainer from './SettingsContainer';
import BreaktimeContainer from './BreaktimeContainer';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../Redux';

const AppNavigator = StackNavigator(
  {
    Home: { screen: RootContainer },
    Settings: { screen: SettingsContainer },
    Breaktime: { screen: BreaktimeContainer }
  },
  {
    navigationOptions: {
      header: {
        visible: false
      }
    }
  }
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
