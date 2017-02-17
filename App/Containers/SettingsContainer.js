import React, { Component } from 'react'
import {
  View,
  Text,
  Slider,
  Switch
} from 'react-native'
import styles from './Styles/SettingsContainerStyle'
import Icon from 'react-native-vector-icons/Entypo'
import formatTime from '../Utils/format-time'

const MINIMUM_WORK_TIME = 180
const MAXIMUM_WORK_TIME = 3600
const MINIMUM_BREAK_TIME = 120
const MAXIMUM_BREAK_TIME = 1800
const ONE_MINUTE = 60
const DEFAULT_WORKTIME_LENGTH = 2100
const DEFAULT_BREAKTIME_LENGTH = 180

class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings',
  }

  // TODO: make this configurable and stored from settings
  state = {
    workTimeLength: DEFAULT_WORKTIME_LENGTH,
    breakTimeLength: DEFAULT_BREAKTIME_LENGTH,
    requireMove: true,
    vibrate: true
  }

  render() {
    const { navigate } = this.props.navigation
    let formattedBreakTime = `${formatTime(this.state.breakTimeLength)} min`
    let formattedWorkTime = '1:00 hour'

    if (this.state.workTimeLength < MAXIMUM_WORK_TIME) {
      formattedWorkTime = `${formatTime(this.state.workTimeLength)} min`
    }

    return (
      <View style={styles.container}>
        <Icon
          name='cross'
          size={40}
          style={styles.closeButton}
          onPress={() => navigate('Home')} />

        <View style={[styles.settingsGroup, styles.firstSettingsGroup]}>
          <Text style={styles.settingsGroupTitle}>WORK / BREAK LENGTH</Text>
          <View style={styles.settingsItem}>
            <Text style={styles.sliderText}>Worktime Length: {formattedWorkTime}</Text>
            <Slider
              style={styles.slider}
              minimumValue={MINIMUM_WORK_TIME}
              maximumValue={MAXIMUM_WORK_TIME}
              step={ONE_MINUTE}
              onValueChange={(v) => this.setState({ workTimeLength: v })}
              value={this.state.workTimeLength} />
          </View>

          <View style={styles.settingsItem}>
            <Text style={styles.sliderText}>Breaktime Length: {formattedBreakTime}</Text>
            <Slider
              style={styles.slider}
              minimumValue={MINIMUM_BREAK_TIME}
              maximumValue={MAXIMUM_BREAK_TIME}
              step={ONE_MINUTE}
              onValueChange={(v) => this.setState({ breakTimeLength: v })}
              value={this.state.breakTimeLength} />
          </View>
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.settingsGroupTitle}>OPTIONS</Text>
          <View style={[styles.settingsItem, styles.checkMarkSettingsItem]}>
            <Text>Require movement during break</Text>
            <Switch
              value={this.state.requireMove}
              onValueChange={(v) => {this.setState({ requireMove: v })}} />
          </View>

          <View style={[styles.settingsItem, styles.checkMarkSettingsItem]}>
            <Text>Enable vibration for notifications</Text>
            <Switch
              value={this.state.vibrate}
              onValueChange={(v) => {this.setState({ vibrate: v })}} />
          </View>
        </View>
      </View>
    )
  }
}

export default SettingsContainer
