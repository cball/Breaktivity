import React from 'react'
import { DeviceEventEmitter } from 'react-native';
import { SensorManager } from 'NativeModules';

class MovementTracker extends React.Component {
  componentDidMount() {
    if (!this.props.trackMovement) {
      return
    }

    SensorManager.startMagnetometer(500)
    DeviceEventEmitter.addListener('Magnetometer', this.props.onMove)
  }

  componentWillUnmount() {
    SensorManager.stopMagnetometer();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.trackMovement) {
      SensorManager.stopMagnetometer();
    }
  }

  render() {
    return null
  }
}

MovementTracker.propTypes = {
  onMove: React.PropTypes.func
}

MovementTracker.defaultProps = {
  onMove: () => {}
}

export default MovementTracker
