import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'
import { Colors } from '../Themes'
import CountdownTimer from '../Components/CountdownTimer'

// import styles from './Styles/RootContainerStyle'
const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  }
})

class RootContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <CountdownTimer seconds={60} />
      </View>
    )
  }
}

export default RootContainer
