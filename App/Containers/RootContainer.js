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
import { connect } from 'react-redux'
import {
  toggleTimer,
  updateTimer,
  completeTimer
} from '../Redux/Modules/Timer/actions'

class RootContainer extends Component {
  static navigationOptions = {
    title: 'Breaktivity',
  }

  render() {
    let pauseButtonIcon, pauseButtonText
    const { navigate } = this.props.navigation

    if (this.props.paused) {
      pauseButtonIcon = 'controller-play'
      pauseButtonText = 'Start Working'
    } else {
      pauseButtonIcon = 'controller-paus'
      pauseButtonText = 'Pause Working'
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />

        <Icon
          name='sound-mix'
          size={40}
          style={styles.settingsIcon}
          onPress={() => navigate('Settings')} />

        <CountdownTimer
          initialSeconds={this.props.workTimeLength}
          seconds={this.props.seconds}
          paused={this.props.paused}
          onTimerUpdate={this.props.onTimerUpdate}
          onTimerComplete={() => navigate('Breaktime')}
        />

        <View style={styles.playPauseButtonContainer}>
          <Icon.Button
            name={pauseButtonIcon}
            style={styles.playPauseButton}
            size={30}
            borderRadius={2}
            iconStyle={styles.playPauseButtonIcon}
            onPress={this.props.toggleTimer}>

            {pauseButtonText}
          </Icon.Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state.timer, state.settings)
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTimer: () => {
      dispatch(toggleTimer())
    },

    onTimerUpdate: (timerInfo) => {
      const { seconds } = timerInfo

      dispatch(updateTimer(timerInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
