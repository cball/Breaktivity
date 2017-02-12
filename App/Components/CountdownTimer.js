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
          width={5}
          fill={this.state.progress}
          prefill={100}
          linecap='round'
          // friction={0}
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

  componentDidMount() {
    return this._setupTimer()
  }

  componentWillUnmount() {
    return this._cancelTimer()
  }

  _setupTimer() {
    this._timerInterval = setInterval(this._tick.bind(this), 300)
    this._startTime = Date.now()
    this._tick();
  }

  _cancelTimer() {
    clearInterval(this._timerInterval)
    this._timerInterval = null

    this.setState({
      seconds: 0,
      progress: 0
    })
  }

  _tick() {
    let tickTime = Date.now()
    let adjustedTime = (this._startTime - tickTime) / 1000
    let timeRemaining = this.props.seconds + adjustedTime
    let progress = (this.props.seconds + adjustedTime) / this.props.seconds * 100
    let seconds = Math.floor(timeRemaining)

    if (seconds <= 0) {
      alert('Done!')
      this._cancelTimer()
      return
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
