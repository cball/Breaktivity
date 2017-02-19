import React from 'react'
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import styles from './Styles/CountdownTimerStyle'
import { Colors } from '../Themes'
import formattedTime from '../Utils/format-time'

const timer = require('react-native-timer');

export default class CountdownTimer extends React.Component {
  render() {
    let timerComponentToRender;
    const timeString = formattedTime(this.props.seconds)
    const progress = this.props.seconds / this.props.initialSeconds * 100

    // TODO: change this to separated Components
    // rather than conditionalizing
    const timerText =
      <View style={this.props.showProgress ? styles.textContainerWithProgress : styles.textContainer}>
        <Text style={styles.textTimeRemaining}>
          { timeString }
        </Text>
        <Text style={styles.textSubtitle}>
          {this.props.subtitle}
        </Text>
      </View>

    if (this.props.showProgress) {
      timerComponentToRender =
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
              timerText
            )
          }
        </AnimatedCircularProgress>
    } else {
      timerComponentToRender = timerText;
    }

    return (
      <View style={styles.container}>
        {timerComponentToRender}
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
    let seconds = Math.floor(timeRemaining)

    if (seconds <= 0) {
      seconds = 0
      this._cancelTimer()
      this.props.onTimerComplete();
    }

    this.props.onTimerUpdate({ seconds })
  }
}

CountdownTimer.propTypes = {
  seconds: React.PropTypes.number
}

CountdownTimer.defaultProps = {
  seconds: 60,
  paused: false,
  showProgress: true,
  subtitle: 'remaining'
}
