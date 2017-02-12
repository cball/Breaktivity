import React from 'react'
import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

import styles from './Styles/CountdownTimerStyle'
import { Colors } from '../Themes'

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props)

    const { seconds } = props

    this.state = {
      progress: 100,
      seconds
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={300}
          width={7}
          fill={this.state.progress}
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
                  { this.state.seconds }
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
    const shouldPause = nextProps.paused === true

    if (shouldPause) {
      this._cancelTimer()
    } else {
      this._startTimer()
    }
  }

  componentDidMount() {
    return this._setupTimer()
  }

  componentWillUnmount() {
    return this._cancelTimer()
  }

  _setupTimer() {
    if (this.props.paused) {
      return;
    }

    this._startTimer()
  }

  _startTimer() {
    this._startTime = Date.now()
    this._timerInterval = setInterval(this._tick.bind(this), 300)
    this._tick()
  }

  _cancelTimer() {
    clearInterval(this._timerInterval)
    this._timerInterval = null
    this._secondsRemaining = this.state.seconds
  }

  _resetTimer() {
    this._cancelTimer()
    this._secondsRemaining = null
    this._startTime = null

    this.setState({
      seconds: this.props.seconds,
      progress: 100
    })
  }

  _tick() {
    let tickTime = Date.now()
    let adjustedTime = (tickTime - this._startTime) / 1000
    let adjustedSeconds = this._secondsRemaining || this.props.seconds
    let timeRemaining = adjustedSeconds - adjustedTime
    let progress = timeRemaining / this.props.seconds * 100
    let seconds = Math.floor(timeRemaining)

    if (seconds <= 0) {
      alert('Done!')

      seconds = 0
      progress = 0
      this._cancelTimer()
    }

    this.setState({ seconds, progress })
  }
}

CountdownTimer.propTypes = {
  seconds: React.PropTypes.number
}

CountdownTimer.defaultProps = {
  seconds: 60,
  paused: false
}
