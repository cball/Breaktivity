import React, { Component } from 'react';
import { View, Text, Slider, Switch } from 'react-native';
import styles from './Styles/SettingsContainerStyle';
import Icon from 'react-native-vector-icons/Entypo';
import formatTime from '../Utils/format-time';
import { connect } from 'react-redux';
import { updateSettings } from '../Redux/Modules/Settings/actions';

const MINIMUM_WORK_TIME = 180;
const MAXIMUM_WORK_TIME = 3600;
const MINIMUM_BREAK_TIME = 120;
const MAXIMUM_BREAK_TIME = 1800;
const ONE_MINUTE = 60;

class SettingsContainer extends Component {
  static navigationOptions = {
    title: 'Settings'
  };
  render() {
    const { goBack } = this.props.navigation;
    let formattedBreakTime = `${formatTime(this.props.breakTimeLength)} min`;
    let formattedWorkTime = '1:00 hour';

    if (this.props.workTimeLength < MAXIMUM_WORK_TIME) {
      formattedWorkTime = `${formatTime(this.props.workTimeLength)} min`;
    }

    return (
      <View style={styles.container}>
        <Icon
          name="cross"
          size={40}
          style={styles.closeButton}
          onPress={() => goBack()}
        />

        <View style={[styles.settingsGroup, styles.firstSettingsGroup]}>
          <Text style={styles.settingsGroupTitle}>WORK / BREAK LENGTH</Text>
          <View style={styles.settingsItem}>
            <Text style={styles.sliderText}>
              Worktime Length: {formattedWorkTime}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={MINIMUM_WORK_TIME}
              maximumValue={MAXIMUM_WORK_TIME}
              step={ONE_MINUTE}
              onValueChange={v => {
                this.props.updateSetting('workTimeLength', v);
              }}
              value={this.props.workTimeLength}
            />
          </View>

          <View style={styles.settingsItem}>
            <Text style={styles.sliderText}>
              Breaktime Length: {formattedBreakTime}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={MINIMUM_BREAK_TIME}
              maximumValue={MAXIMUM_BREAK_TIME}
              step={ONE_MINUTE}
              onValueChange={v => {
                this.props.updateSetting('breakTimeLength', v);
              }}
              value={this.props.breakTimeLength}
            />
          </View>
        </View>

        <View style={styles.settingsGroup}>
          <Text style={styles.settingsGroupTitle}>OPTIONS</Text>
          <View style={[styles.settingsItem, styles.checkMarkSettingsItem]}>
            <Text>Require movement during break</Text>
            <Switch
              value={this.props.requireMove}
              onValueChange={v => {
                this.props.updateSetting('requireMove', v);
              }}
            />
          </View>

          <View style={[styles.settingsItem, styles.checkMarkSettingsItem]}>
            <Text>Enable vibration for notifications</Text>
            <Switch
              value={this.props.vibrate}
              onValueChange={v => {
                this.props.updateSetting('vibrate', v);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.settings;
};

const mapDispatchToProps = dispatch => {
  return {
    updateSetting: (settingName, settingValue) => {
      let settings = {};
      settings[settingName] = settingValue;

      dispatch(updateSettings(settings));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
