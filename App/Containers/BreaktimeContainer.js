import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Button
} from 'react-native'
import styles from './Styles/BreaktimeContainerStyle'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import CountdownTimer from '../Components/CountdownTimer'
import ProgressBar from '../Components/ProgressBar'
import MovementTracker from '../Components/MovementTracker'

const DeviceInfo = require('react-native-device-info')

class BreaktimeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moveProgress: 1,
      trackMovement: !DeviceInfo.isEmulator(),
      seconds: this.props.breakTimeLength,
      isBreaktimeOver: false
    }
  }

  componentDidMount() {
    if (DeviceInfo.isEmulator()) {
      this._fakeMovementProgress()
    }
  }

  _fakeMovementProgress() {
    setTimeout(() => {
      this.setState({ moveProgress: 100 })
    }, 2000)
  }

  // TODO: make this actually accurate, something like
  // https://github.com/0x69/coding-experiments/blob/master/PathRecorder/src/com/pathrecorder/Movement.java
  // perhaps?
  // also move to util class
  _movementToPercent(moveData) {
    const initialMoveData = this.state.initialMoveData || moveData
    const {x,y,z} = moveData
    const deltaX = Math.abs(initialMoveData.x - x)
    const deltaY = Math.abs(initialMoveData.y - y)
    const deltaZ = Math.abs(initialMoveData.z - z)
    let completedActivities = this.state.completedActivities || []
    let moveProgress = this.state.moveProgress
    let trackMovement = this.state.trackMovement

    if (deltaY > 20 && !completedActivities.includes('y')) {
      completedActivities.push('y')
      moveProgress = moveProgress + 33.33
    }

    if (deltaX > 20 && !completedActivities.includes('x')) {
      completedActivities.push('x')
      moveProgress = moveProgress + 33.33
    }

    if (deltaZ > 20 && !completedActivities.includes('z')) {
      completedActivities.push('z')
      moveProgress = moveProgress + 33.33
    }

    const moveDataText = `
      x: ${x}
      y: ${y}
      z: ${z}
    `

    if (completedActivities.length === 3) {
      trackMovement = false
    }

    this.setState({
      moveDataText,
      initialMoveData,
      moveProgress,
      completedActivities,
      trackMovement
    })
  }

  _startNewWorkCycle() {
    const { navigate } = this.props.navigation

    // TODO dispatch action to reset timer
    navigate('Home')
  }

  _breakTimeComponents() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Breaktime!</Text>
        <Image source={Images.breaktimeIcon} style={styles.icon} />
        <Text style={styles.subtitle}>Get up and move!</Text>

        <View>
          <CountdownTimer
            showProgress={false}
            initialSeconds={this.props.breakTimeLength}
            seconds={this.state.seconds}
            paused={this.state.trackMovement}
            subtitle='until work'
            onTimerUpdate={({ seconds }) => this.setState({ seconds })}
            onTimerComplete={() => this.setState({ isBreaktimeOver: true })}
          />
        </View>

        <View style={styles.progressWrapper}>
          <ProgressBar progress={this.state.moveProgress} />
        </View>

        <Text>{this.state.moveDataText}</Text>
        <MovementTracker
          trackMovement={this.state.trackMovement}
          onMove={(moveData) => this._movementToPercent(moveData)} />
      </View>
    )
  }

  _worktimeComponents() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Worktime!</Text>
        <Image source={Images.worktimeIcon} style={styles.icon} />

        <View style={styles.progressWrapper}>
          <Button title='Start working' onPress={this._startNewWorkCycle.bind(this)} />
        </View>
      </View>
    )
  }

  render() {
    const { isBreaktimeOver } = this.state

    // TODO: separate components
    if (isBreaktimeOver) {
      return this._worktimeComponents()
    }

    return this._breakTimeComponents()
  }
}

const mapStateToProps = (state) => {
  return state.settings
}

export default connect(mapStateToProps)(BreaktimeContainer)
