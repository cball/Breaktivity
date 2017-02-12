import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Alert,
  Button
} from 'react-native'
import styles from './Styles/RootContainerStyle'
import CountdownTimer from '../Components/CountdownTimer'
import Icon from 'react-native-vector-icons/Entypo'
import { Fonts } from '../Themes'

class RootContainer extends Component {
  // TODO: make this configurable and stored from settings
  state = {
    seconds: 60,
    paused: true
  }

  /**
   * Toggles the play/pause state of the timer.
   * @method
   * @public
   */
  toggleTimer = () => {
    let paused = !this.state.paused

    this.setState({ paused })
  }

  render() {
    let pauseButtonIcon, pauseButtonText;

    if (this.state.paused) {
      pauseButtonIcon = 'controller-play'
      pauseButtonText = 'Start Working'
    } else {
      pauseButtonIcon = 'controller-paus'
      pauseButtonText = 'Pause Working'
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <CountdownTimer
          seconds={this.state.seconds}
          paused={this.state.paused}
        />

        <View style={styles.playPauseButtonContainer}>
          <Icon.Button
            name={pauseButtonIcon}
            style={styles.playPauseButton}
            size={30}
            borderRadius={2}
            iconStyle={styles.playPauseButtonIcon}
            onPress={this.toggleTimer}>

            {pauseButtonText}
          </Icon.Button>
        </View>
      </View>
    )
  }
}

export default RootContainer
