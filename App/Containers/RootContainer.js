import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import styles from './Styles/RootContainerStyle';
import CountdownTimer from '../Components/CountdownTimer';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { toggleTimer, updateTimer } from '../Redux/Modules/Timer/actions';
import LoadingScreen from '../Components/LoadingScreen';

class RootContainer extends Component {
  static navigationOptions = {
    title: 'Breaktivity'
  };
  render() {
    let pauseButtonIcon, pauseButtonText;
    const { navigate } = this.props.navigation;

    if (this.props.paused) {
      pauseButtonIcon = 'controller-play';
      pauseButtonText = 'Start Working';
    } else {
      pauseButtonIcon = 'controller-paus';
      pauseButtonText = 'Pause Working';
    }

    if (this.props.isLoading) {
      return <LoadingScreen />;
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <Icon
            name="sound-mix"
            size={40}
            style={styles.settingsIcon}
            onPress={() => navigate('Settings')}
          />

          <CountdownTimer
            initialSeconds={this.props.workTimeLength}
            seconds={this.props.seconds}
            paused={this.props.paused}
            subtitle="until break"
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
      );
    }
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state.timer, state.settings, state.startup);
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTimer: () => {
      dispatch(toggleTimer());
    },

    onTimerUpdate: timerInfo => {
      dispatch(updateTimer(timerInfo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
