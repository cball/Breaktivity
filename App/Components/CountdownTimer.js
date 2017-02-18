import React from 'react'
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import styles from './Styles/CountdownTimerStyle'
import { Colors } from '../Themes'
import formattedTime from '../Utils/format-time'

const timer = require('react-native-timer');

export default class CountdownTimer extends React.Component {
  render() {
    const timeString = formattedTime(this.props.seconds)
    let progress = this.props.seconds / this.props.initialSeconds * 100

    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={300}
          width={7}
          fill={progress}
          prefill={100}
          linecap='round'
          tension={0}
          rotation={360}
          tintColor={Colors.electricBlue}
          backgroundColor={Colors.darkBlue}
          style={styles.progress}>
          {
            () => (
              <View style={styles.textContainer}>
                <Text style={styles.textTimeRemaining}>
                  { timeString }
                </Text>
                <Text style={styles.textSubtitle}>
                  until break
                </Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.paused === nextProps.paused) {
      return;
    }

    const shouldPause = nextProps.paused === true

    if (shouldPause) {
      this._cancelTimer()
    } else {
      this._startTimer()
    }
  }

  componentDidMount() {
    this._setupTimer()
  }

  componentWillUnmount() {
    this._cancelTimer()
  }

  _setupTimer() {
    if (this.props.paused) {
      return;
    }

    this._startTimer()
  }

  _startTimer() {
    const timerRunning = timer.intervalExists('countdownTimer')

    if (timerRunning) {
      return;
    }

    this._startTime = Date.now()
    timer.setInterval('countdownTimer', this._tick.bind(this), 1000)
    this._tick()
  }

  _cancelTimer() {
    timer.clearInterval('countdownTimer')
    this._timerInterval = null
  }

  _tick() {
    let tickTime = Date.now()
    let timeRemaining = this.props.seconds - 1
    let progress = timeRemaining / this.props.initialSeconds * 100
    let seconds = Math.floor(timeRemaining)

    if (seconds <= 0) {
      alert('Done!')

      seconds = 0
      progress = 0
      this._cancelTimer()
    }

    this.props.onTimerUpdate({ seconds, progress })
  }
}

CountdownTimer.propTypes = {
  seconds: React.PropTypes.number
}

CountdownTimer.defaultProps = {
  seconds: 60,
  paused: false,
  progress: 100
}
